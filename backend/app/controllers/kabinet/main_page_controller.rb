# frozen_string_literal: true

##
# Основная страница кабинета
class Kabinet::MainPageController < KabinetController
  ##
  # Подгрузка данных, главная страница
  def index
    render json: { data: "" }
  end
end
