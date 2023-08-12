# frozen_string_literal: true

class UsersController < KabinetController
  attr_reader :current_user

  skip_before_action :authenticate_request, only: %i[index create]

  ##
  # Авторизация пользователя
  def index
    @user = User.find_by(email: sign_in_params[:email])
    if @user&.authenticate(sign_in_params[:password])
      token = jwt_encode({ user_id: @user.id })
      response.set_cookie(
        :jwt,
        {
          value: token,
          expires: 30.minutes.from_now
        }
      )
      render json: { refresh_token: token }, status: :ok
    else
      render json: [{ password: "Неверный пароль" }], status: :unprocessable_entity
    end
  rescue Exception => e
    render_errors
  end

  ##
  # Регистрация пользвователя
  def create
    @user = User.new(sign_up_params)
    if @user.valid?
      @user.save
      token = jwt_encode({ user_id: @user.id })
      response.set_cookie(
        :jwt,
        {
          value: token,
          expires: 30.minutes.from_now
        }
      )
      render json: { refresh_token: token }, status: :created
    else
      render json: @user.errors.messages, status: :unprocessable_entity
    end
  rescue Exception => e
    render_errors
  end

  ##
  # Получечние данных пользователя
  def get_me
    render json: { email: current_user.email }, status: :ok
  end

  private
    def sign_in_params
      params.permit(:email, :password)
    end

    def sign_up_params
      params.permit(:email, :password, :password_confirmation)
    end
end
