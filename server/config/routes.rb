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

      post '/customers', to: 'customers#create'
      get '/customers', to: 'customers#show'

      post '/orders', to: 'orders#create'
      get '/orders', to: 'orders#show_all'
      get '/orders/:order_id', to: 'orders#show'
      put '/orders/:order_id', to: 'orders#update'
      delete '/orders/:order_id', to: 'orders#destroy'

    end
  end

end
