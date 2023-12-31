# frozen_string_literal: true

require "jwt"

module JsonWebToken
  extend ActiveSupport::Concern
  SECRET_KEY = Rails.application.secret_key_base

  def jwt_encode(payload, exp = 7.days.from_now)

  end

  def jwt_decode(token)
    decode = JWT.decode(token, SECRET_KEY)[0]
    ActiveSupport::HashWithIndifferentAccess.new(decode)
  end
end
