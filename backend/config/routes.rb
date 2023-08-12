Rails.application.routes.draw do
  root to: "kabinet/main_page#index"
  get "/", to: "welcome#index"


  scope :auth do
    get "/sign_in", to: "users#index"
    post "/sign_up", to: "users#create"
    get "/get_me", to: "users#get_me"
  end
end
