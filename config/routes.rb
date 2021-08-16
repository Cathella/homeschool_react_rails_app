Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :teachers, param: :slug
      resources :lessons, param: :slug
      resources :reviews, only: [:create, :destroy]
      # resources :comments, only: [:create, :destroy]

      resource :users, only: [:create]
      post "/login", to: "users#login"
      get "/auto_login", to: "users#auto_login"
    end
  end
  
  get "*path", to: "pages#index", via: :all
end
