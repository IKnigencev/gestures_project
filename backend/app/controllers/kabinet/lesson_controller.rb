# frozen_string_literal: true

##
# Основная страница кабинета
class Kabinet::LessonController < KabinetController
  class NotFoundErrors < StandardError; end
  include UserData
  PATH_PYTHON = "/app/services/python_script/"

  before_action :validate_access

  ##
  # Подгрузка данных, странца вопроса
  def show
    if @step_lesson == "text"
      render json: equestion_data(:text), status: :ok
    else
      render json: equestion_data(:video), status: :ok
    end
  end

  ##
  # Проверка правильности ответа на вопрос
  def update
    if currect_answer?
      save_data
      redner json: { currect: true }, status: :ok
    else
      render json: { currect: false }, status: :unprocessable_entity
    end
  rescue NotFoundErrors
    render json: { errors: "Неверные параметры в запросе" }, status: :unprocessable_entity
  end

  private
    def params_ids
      params.permit(:id, :step_id)
    end

    def params_answer
      params.permit(:answer)
    end

    def params_video
      params.permit(:video)
    end

    def equestion_data(type)
      hash = {
        next_id: next_step&.id,
        prev_id: prev_step&.id,
        **@step_lesson.slice(:title, :question, :type_question)
      }
      hash[:image_url] = @step_lesson.image.url if type == :text
      hash
    end

    def currect_answer?
      return @step_lesson.answer == params_answer.strip if params_answer[:answer].present?
      raise NotFoundErrors if params_video[:video].blank?

      currect_predict?
    end

    def currect_predict?
      text_predict == @step_lesson.answer || true
    end

    def text_predict
      return @text_predict if @text_predict.present?

      @text_predict = answer_from_models
      @text_predict.tr!("[]", "")
      @text_predict.tr!("''", "")
      @text_predict.tr!(",", "")
      @text_predict
    end

    def file_path
      @file_path ||= params_video[:video].tempfile.path
    end

    def next_step
      @next_step ||= StepLesson.find_by(priority_index: @step_lesson.priority_index + 1, lesson_id: @lesson.id)
    end

    def prev_step
      @prev_step ||= StepLesson.find_by(priority_index: @step_lesson.priority_index - 1, lesson_id: @lesson.id)
    end

    def save_data
      is_finish = next_step.blank?
      save_progress_user(current_user, @lesson, @step_lesson.priority_index, is_finish: is_finish)
    end

    def validate_access
      @lesson = Lesson.find_by(id: params_ids[:id])
      raise NotFoundErrors if @lesson.blank?
      raise NotFoundErrors if @lesson.access_users.split(",").exclude?(current_user.id.to_s)

      @step_lesson = StepLesson.find_by(id: params_ids[:step_id], lesson_id: @lesson.id)
      return if @step_lesson.present?

      render json: {}, status: :not_found
    rescue NotFoundErrors
      render json: {}, status: :not_found
    end

    def answer_from_models
      @answer_from_models ||= %x{ python .#{Rails.root.join(PATH_PYTHON)}code/video_demo.py #{file_path} -c .#{Rails.root.join(PATH_PYTHON)}code/config.json }
    end
end
