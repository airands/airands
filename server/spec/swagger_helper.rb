# frozen_string_literal: true

require 'rails_helper'

RSpec.configure do |config|
  # Specify a root folder where Swagger JSON files are generated
  # NOTE: If you're using the rswag-api to serve API descriptions, you'll need
  # to ensure that it's configured to serve Swagger from the same folder
  config.swagger_root = Rails.root.join('swagger').to_s

  # Define one or more Swagger documents and provide global metadata for each one
  # When you run the 'rswag:specs:swaggerize' rake task, the complete Swagger will
  # be generated at the provided relative path under swagger_root
  # By default, the operations defined in spec files are added to the first
  # document below. You can override this behavior by adding a swagger_doc tag to the
  # the root example_group in your specs, e.g. describe '...', swagger_doc: 'v2/swagger.json'
  config.swagger_docs = {
    'v1/swagger.yaml' => {
      openapi: '3.0.1',
      info: {
        title: 'API V1',
        version: 'v1'
      },
      paths: {},
      servers: [
        {
          url: 'https://{defaultHost}/api/v1',
          variables: {
            defaultHost: {
              default: 'api.levimurray.dev'
            }
          }
        }
      ],

      components: {
        schemas: {

          error_dto: {
            type: :object,
            properties: {
              message: {type: :string}
            },
          },

          # Application DTOs

          user_dto: {
            type: :object,
            properties: {
              id: {type: :string},
              phone_number: {type: :string},
              profile_status: {'$ref': '#/components/schemas/profile_status'}
            },
            required: %w[id phone_number profile_status]
          },

          # Request Payloads

          register_dto: {
            type: :object,
            properties: {
              phone_number: {type: :string},
            },
            required: %w[phone_number]
          },

          phone_confirmation: {
            type: :object,
            properties: {
              phone_number: {type: :string},
              confirmation_pin: {type: :string},
            },
            required: %w[phone_number confirmation_pin]
          },


          # Enums

          profile_status: {
            type: :string,
            enum: %w(profile_status_name profile_status_address profile_status_billing profile_status_complete)
          }
        }
      }
    }
  }

  # Specify the format of the output Swagger file when running 'rswag:specs:swaggerize'.
  # The swagger_docs configuration option has the filename including format in
  # the key, this may want to be changed to avoid putting yaml in json files.
  # Defaults to json. Accepts ':json' and ':yaml'.
  config.swagger_format = :yaml
end
