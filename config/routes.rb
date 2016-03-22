Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: [:edit, :new]
  end
end
