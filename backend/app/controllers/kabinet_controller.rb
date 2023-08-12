# frozen_string_literal: true

class KabinetController < ApplicationController
  attr_reader :current_user
  before_action :authenticate_request

  private
    def authenticate_request
      header =  request.headers["Authorization"]
      header = header.split(" ").last  if header
      decoded = jwt_decode(header)
      @current_user = User.find(decoded[:id])
    end
end
