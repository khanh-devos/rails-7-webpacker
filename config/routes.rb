Rails.application.routes.draw do
  resources :messages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  
  root 'pages#home'
  get '/greeting', to: 'pages#home'

  namespace :api, default: {format: :json} do
    namespace :v1 do
      resources :messages, only: %i[index]
    end
  end 
end
