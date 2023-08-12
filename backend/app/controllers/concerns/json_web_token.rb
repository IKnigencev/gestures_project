# frozen_string_literal: true

require "jwt"

##
#
module JsonWebToken
  class WrongCodeJWT < StandardError; end

  extend ActiveSupport::Concern
  SECRET_KEY = "Rails.application.secret_key_base"

  ##
  # Генерация ключа jwt
  def jwt_encode(payload, exp = 7.days.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  ##
  # Получение данных jwt токена
  def jwt_decode(token)
    decode = JWT.decode(token, SECRET_KEY)
    raise WrongCodeJWT if decode.blank?

    ActiveSupport::HashWithIndifferentAccess.new(decode[0])
  rescue JWT::DecodeError
    nil
  end
end
