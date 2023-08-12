# frozen_string_literal: true

##
# Общий контроллер кабинета
class KabinetController < ApplicationController
  attr_reader :current_user

  before_action :authenticate_request

  def render_errors
    render json: [{ error: "Неизвестная ошибка" }], status: :internal_server_error
  end

  private
    def authenticate_request
      header = request.headers["Authorization"]
      header = header.split.last if header
      decoded = jwt_decode(header)
      render json: {}, status: :forbidden && return if decoded.blank?

      @current_user = User.find_by(id: decoded[:user_id])
      return if @current_user.present?

      render json: {}, status: :forbidden
    rescue WrongCodeJWT
      render json: {}, status: :forbidden
    end
end
