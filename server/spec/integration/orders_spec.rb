require 'swagger_helper'

describe 'Orders API' do

  api_tag = 'Orders'

  path '/orders' do

    # API::V1::OrdersController#create
    post 'Create new order' do
      tags api_tag
      operationId 'createOrder'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :order, in: :body, schema: {'$ref' => '#/components/schemas/new_order' }

      response 201, 'order created' do
        schema '$ref' => '#/components/schemas/order_response'
        run_test!
      end

      response 422, 'invalid request' do
        let(:order) { {} }

        run_test!
      end

    end

    # API::V1::OrdersController#show_all
    get 'Get all customer orders' do
      tags api_tag
      operationId 'getAllOrders'
      produces 'application/json'

      response 200, 'All customer orders' do
        schema '$ref': '#/components/schemas/orders_response'
        run_test!
      end

    end

  end

  path '/orders/{order_id}' do

    # API::V1::OrdersController#show
    get 'Get specific customer order' do
      tags api_tag
      operationId 'getOrder'
      produces 'application/json'
      parameter name: :order_id, in: :path, type: :string

      response 200, 'Specified customer order' do
        schema '$ref': '#/components/schemas/order_response'
        run_test!
      end

    end



  end

end
