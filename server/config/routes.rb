# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#
Rails.application.routes.draw do

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  namespace :api do
    namespace :v1 do

      scope "/sessions" do
        get '', to: 'sessions#show'
        post '', to: 'sessions#create'
        delete '', to: 'sessions#destroy'
      end

      scope "/customers" do
        post '', to: 'customers#create'
        get '', to: 'customers#show'
      end

      scope "/orders" do
        post '', to: 'orders#create'
        get '', to: 'orders#show_all'

        scope "/:order_id" do
          get '', to: 'orders#show'
          put '', to: 'orders#update'
          delete '', to: 'orders#destroy'
        end
      end


      namespace :auth do
        namespace :airands do
          scope "/accounts" do
            post '', to: "accounts#create"
          end

          scope "/account/:account_id" do
            put '', to: "accounts#update"
          end
        end
      end
    end
  end

end
