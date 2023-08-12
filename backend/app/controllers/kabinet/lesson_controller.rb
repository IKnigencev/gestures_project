# frozen_string_literal: true

##
# Основная страница кабинета
class Kabinet::LessonController < KabinetController
  include UserData
  LESSON_PARAM = %i[title description priority_index]

  ##
  # Подгрузка данных, главная страница
  def index
    @current_user = User.first
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

      @user_lessons = all_lessons.map do |lesson|
        active = lesson.access_users.split(",").include?(current_user.id.to_s)
        @active_lessons_count += 1 if active
        hash = lesson.slice(*LESSON_PARAM)
        hash[:active] = active
        hash[:all_step] = StepLesson.where(lesson_id: lesson.id).count
        hash[:current_step] = progress_by_lesson(lesson.id)
        hash
      end.compact
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
      @progress_for_user ||= JSON.parse(get_progress_user(current_user.id)) || [{}]
    end
end
