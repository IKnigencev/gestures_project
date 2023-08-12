# frozen_string_literal: true

##
# Основная страница кабинета
class Kabinet::MainPageController < KabinetController
  include UserData
  LESSON_PARAM = %i[id title description priority_index].freeze

  ##
  # Подгрузка данных, главная страница
  def index
    @active_lessons_count = 0
    render json: {
      lessons: user_lessons,
      all_lessons_count: all_lessons.count,
      active_lessons_count: @active_lessons_count
    }, status: :ok
  end

  private
    def user_lessons
      return @user_lessons if @user_lessons.present?
      return [] if all_lessons.blank?

      @user_lessons = all_lessons.map do |lesson|
        active = lesson.access_users.split(",").include?(current_user.id.to_s)
        @active_lessons_count += 1 if active
        hash = lesson.slice(*LESSON_PARAM)
        current_step = progress_by_lesson(lesson.id)
        steps = all_steps(lesson.id)
        hash[:active] = active
        hash[:is_finish] = progress_for_user.present? ? progress_for_user[:is_finish] : false
        hash[:all_step] = steps.count
        hash[:current_step] = current_step
        hash[:step_id] = current_step_id(steps, current_step)
        hash
      end.compact
    end

    def current_step_id(steps, priority_index)
      if priority_index.blank?
        steps.find_by(priority_index: 1)&.id
      else
        steps.find_by(priority_index: priority_index).id
      end
    end

    def all_steps(lesson_id)
      @all_steps = StepLesson.where(lesson_id: lesson_id)
    end

    def all_lessons
      @all_lessons ||= Lesson.all
    end

    def progress_by_lesson(lesson_id)
      data = progress_for_user.find { |saved_data| saved_data[:lesson_id].to_s == lesson_id.to_s }
      return if data.blank?

      data[:last_step]
    end

    def progress_for_user
      @progress_for_user ||= get_progress_user(current_user.id)
    end
end
