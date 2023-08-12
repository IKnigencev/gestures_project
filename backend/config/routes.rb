Rails.application.routes.draw do
  root to: "kabinet/main_page#index"
  get "/", to: "kabinet/main_page#index"

  scope :question do
    get "/:id/:step_id", to: "kabinet/lesson#show"
    patch "/:id/:step_id", to: "kabinet/lesson#update"
  end

  scope :auth do
    post "/sign_in", to: "users#sign_in"
    post "/sign_up", to: "users#create"
    get "/get_me", to: "users#get_me"
  end
end
