# frozen_string_literal: true

##
# Общий контроллер кабинета
class KabinetController < ApplicationController
  class ErrorDecode < StandardError; end

  attr_reader :current_user

  before_action :authenticate_request

  def render_errors
    render json: { error: "Неизвестная ошибка" }, status: :internal_server_error
  end

  def render_forbidden
    render json: {}, status: :forbidden
  end

  private
    def authenticate_request
      header = request.headers["Authorization"]
      header = header.split.last if header
      decoded = jwt_decode(header)
      raise ErrorDecode if decoded.blank?

      @current_user = User.find_by(id: decoded[:user_id])
      return if @current_user.present?

      rrender_forbidden
    rescue WrongCodeJWT, ErrorDecode
      render_forbidden
    end
end
