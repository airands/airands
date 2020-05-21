require 'swagger_helper'

describe 'Customers API' do

  api_tag = 'Customers'

  path '/customers' do

    # API::V1::UsersController#create
    post 'Create new customer user' do
      tags api_tag
      operationId 'createUser'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :customer, in: :body, schema: {'$ref' => '#/components/schemas/customer_registration' }

      response 201, 'sms confirmation sent' do
        schema '$ref' => '#/components/schemas/customer_registration'
        run_test!
      end

      response 422, 'invalid request' do
        let(:customer) { {} }

        run_test!
      end

    end

    get 'Get authenticated customer' do
      tags api_tag
      operationId 'getUser'
      produces 'application/json'

      response 200, 'authenticated customer user' do
        schema '$ref' => '#/components/schemas/customer_dto'
        run_test!
      end

    end

  end

end
