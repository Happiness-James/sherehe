Rails.application.routes.draw do
  resources :users
  resources :events
  post "/login", to: "session#create"
  post "/logout", to: "session#destroy"
  # get "/me", to: "users#show"


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
