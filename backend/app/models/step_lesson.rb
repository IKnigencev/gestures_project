# frozen_string_literal: true

##
# Основная моделька пользователя
class StepLesson < ApplicationRecord
  self.table_name = "steps_lessons"

  belongs_to :lesson, class_name: "Lesson"
  has_attached_file :image, content_type: { content_type: /\Aimage\/.*\z/ }
end
