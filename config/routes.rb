Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :teachers, param: :slug
      resources :lessons, param: :slug
      resources :reviews, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy]
    end

    match "*path", to: "pages#index", via: :all
  end
end
