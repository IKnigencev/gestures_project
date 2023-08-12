# frozen_string_literal: true

##
# Основная моделька пользователя
class User < ApplicationRecord
  self.table_name = "users"

  has_secure_password

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, confirmation: true
  validates :password_confirmation, presence: true

  has_many :lessons, class_name: "Lesson"
end
