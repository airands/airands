require 'swagger_helper'

describe 'Users API' do

  api_tag = 'User'

  path '/users' do

    # API::V1::UsersController#create
    post 'SMS confirmation for new/existing phone user' do
      tags api_tag
      operationId 'sendConfirmation'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :user, in: :body, schema: { '$ref' => '#/components/schemas/register_dto' }

      response 201, 'sms confirmation sent' do
        let(:user) { {phone_number: '7789869397'} }

        schema '$ref' => '#/components/schemas/register_dto'
        run_test!
      end

      response 422, 'invalid request' do
        let(:user) { {} }

        run_test!
      end

    end
  end

end
