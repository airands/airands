# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#
Rails.application.routes.draw do

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  namespace :api do
    namespace :v1 do

      get '/sessions', to: 'sessions#show'
      post '/sessions', to: 'sessions#create'
      delete '/sessions', to: 'sessions#destroy'

      resources :users

      put '/profiles', to: 'profiles#update'

    end
  end

end
