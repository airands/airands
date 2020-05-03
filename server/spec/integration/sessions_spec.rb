require 'swagger_helper'

describe 'Sessions API' do

  path '/sessions' do

    post 'Creates an authenticated session' do
      tags 'Sessions'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :user_confirmation, in: :body, schema: {
        type: :object,
        properties: {
          phone_number: {type: :integer},
          confirmation_pin: {type: :string},
        },
        required: %w(phone_number confirmation_pin),
      }

      response 200, 'session authenticated' do
        schema type: :object,
               properties: {
                 user_id: {type: :string},
                 phone_number: {type: :string},
               },
               required: %w(user_id, phone_number)
        let(:user_confirmation) { {phone_number: 7789869397, confirmation_pin: '7BFD6Y'} }
        run_test!
      end

      response 422, 'invalid request' do
        let(:user_confirmation) { {phone_number: 7789869397} }
        run_test!
      end
    end

    delete 'Deletes an auth session' do
      tags 'Sessions'

      response 200, 'session deleted' do
        run_test!
      end

      response 401, 'unauthorized' do
        run_test!
      end
    end

  end

end
