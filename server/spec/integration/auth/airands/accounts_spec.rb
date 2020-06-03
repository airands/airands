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
        schema '$ref' => '#/components/schemas/airands_account_response'
        run_test!
      end

      response 400, 'Creation error' do
        schema '$ref' => '#/components/schemas/base_response'
        run_test!
      end
    end
  end
end
