# frozen_string_literal: true

##
# Основная моделька пользователя
class User < ApplicationRecord
  self.table_name = "users"

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, present: { with: URI::MailTo::EMAIL_REGEXP }, confirmation: true
  validates :password_confirmation, presence: true
end
