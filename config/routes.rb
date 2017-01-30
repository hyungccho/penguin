Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    namespace :v1 do
      resources :users, only: [:create, :update, :destroy]
      resource :session, only: [:create, :destroy]
    end
  end

  get '*path', to: 'static_pages#root'
end
