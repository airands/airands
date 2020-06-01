require 'swagger_helper'

describe 'Accounts API' do

  api_tag = 'Accounts'

  path '/auth/airands/accounts' do

    post 'Create a new account' do
      tags api_tag
      operationId 'createAccount'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :account, in: :body, schema: {'$ref' => '#/components/schemas/airands_account' }

      response 200, 'Account created' do
        schema '$ref' => '#/components/schemas/airands_account'
        run_test!
      end

      response 400, 'Creation error' do
        schema '$ref' => '#/components/schemas/error_response'
        run_test!
      end
    end
  end

    # API::V1::UsersController#create
    # post 'Create new customer user' do
    #   tags api_tag
    #   operationId 'createUser'
    #   consumes 'application/json'
    #   produces 'application/json'
    #
    #   parameter name: :customer, in: :body, schema: {'$ref' => '#/components/schemas/customer_registration' }
    #
    #   response 201, 'sms confirmation sent' do
    #     schema '$ref' => '#/components/schemas/customer_registration'
    #     run_test!
    #   end
    #
    #   response 422, 'invalid request' do
    #     let(:customer) { {} }
    #
    #     run_test!
    #   end
    #
    # end
    #
    # get 'Get authenticated customer' do
    #   tags api_tag
    #   operationId 'getUser'
    #   produces 'application/json'
    #
    #   response 200, 'authenticated customer user' do
    #     schema '$ref' => '#/components/schemas/customer_dto'
    #     run_test!
    #   end
    #
    # end
end
