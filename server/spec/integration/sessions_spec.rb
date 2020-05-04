require 'swagger_helper'

describe 'Sessions API' do

  api_tag = 'Session'

  path '/sessions' do

    # API::V1::SessionsController#create
    post 'Creates an authenticated session' do
      tags api_tag
      operationId 'authenticate'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :user_confirmation, in: :body, schema: { '$ref' => '#/components/schemas/phone_confirmation' }

      response 200, 'session authenticated' do
        let(:user_confirmation) { {phone_number: 7789869397, confirmation_pin: '7BFD6Y'} }

        schema '$ref' => '#/components/schemas/user_dto'
        run_test!
      end

      response 422, 'invalid request' do
        let(:user_confirmation) { {phone_number: 7789869397} }

        schema '$ref' => '#/components/schemas/error_dto'
        run_test!
      end
    end

    # API::V1::SessionsController#show
    get 'get session' do
      tags api_tag
      operationId 'getCurrentSession'
      produces 'application/json'

      response 200, 'session info' do
        schema '$ref' => '#/components/schemas/user_dto'
        run_test!
      end

      response 401, 'unauthorized' do
        schema '$ref' => '#/components/schemas/error_dto'
        run_test!
      end
    end

    # API::V1::SessionsController#destroy
    delete 'Deletes an auth session' do
      tags api_tag
      operationId 'logout'

      response 200, 'session deleted' do
        run_test!
      end

      response 401, 'unauthorized' do
        schema '$ref' => '#/components/schemas/error_dto'
        run_test!
      end
    end

  end

end
