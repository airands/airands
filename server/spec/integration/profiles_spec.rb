require 'swagger_helper'

describe 'Profile API' do

  api_tag = 'Profile'

  path '/profiles' do

    # API::V1::ProfilesController#update
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

  path '/profile/name' do

    # API::V1::ProfilesController#update_name
    put 'Update user profile name' do
      tags api_tag

      operationId 'updateProfileName'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :profile_name, in: :body, schema: {
        type: :object,
        properties: {
          first_name: {type: :string},
          last_name: {type: :string},
        },
        required: %w[ first_name last_name ],
      }

      response 200, 'user profile updated' do
        schema '$ref' => '#/components/schemas/user_dto'
        run_test!
      end

      response 422, 'invalid request' do
        run_test!
      end

    end

  end

  path '/profile/address' do

    # API::V1::ProfilesController#update_address
    put 'Update user profile address' do
      tags api_tag

      operationId 'updateProfileAddress'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :profile_name, in: :body, schema: { '$ref': '#/components/schemas/profile_address' }

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
