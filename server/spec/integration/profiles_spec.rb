require 'swagger_helper'

describe 'Profile API' do

  api_tag = 'Profile'

  path '/profiles' do

    # API::V1::UsersController#create
    put 'Update user profile' do
      tags api_tag

      operationId 'updateProfile'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :profile, in: :body, schema: { '$ref': '#/components/schemas/profile' }

      response 200, 'user profile updated' do
        schema '$ref' => '#/components/schemas/user_dto'
        run_test!
      end

      response 422, 'invalid request' do
        run_test!
      end

    end
  end

end
