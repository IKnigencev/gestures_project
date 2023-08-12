# frozen_string_literal: true

##
# Основная моделька пользователя
class StepLesson < ApplicationRecord
  self.table_name = "steps_lessons"

  belongs_to :lesson, class_name: "Lesson", foreign_key: "lesson_id"
end
