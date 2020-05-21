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
              profile: {'$ref': '#/components/schemas/profile'},
              complete_profile: {type: :boolean},
              complete_name: {type: :boolean},
              complete_address: {type: :boolean},
              complete_billing: {type: :boolean},
            },
            required: %w[id phone_number complete_profile complete_name complete_address complete_billing, profile],
          },

          customer_dto: {
            type: :object,
            properties: {
              email: {type: :string},
              first_name: {type: :string},
              last_name: {type: :string},
              auth_provider: {type: :string},
              auth_provider_uid: {type: :string},
              avatar_url: {type: :string},
            },
            required: %w[email first_name last_name auth_provider, auth_provider_uid],
          },

          # Request Payloads

          customer_registration: {
            type: :object,
            properties: {
              user_data: {'$ref': '#/components/schemas/customer_dto'},
              auth_provider_token: {type: :string},
              app_platform: {'$ref': '#/components/schemas/app_platform'},
            },
            required: %w[user_data auth_provider_token app_platform],
          },

          phone_confirmation: {
            type: :object,
            properties: {
              phone_number: {type: :string},
              confirmation_pin: {type: :string},
            },
            required: %w[phone_number confirmation_pin],
          },

          profile: {
            type: :object,
            properties: {
              first_name: {type: :string},
              last_name: {type: :string},
              address: {'$ref': '#/components/schemas/profile_address'},
            },
            required: %w[first_name last_name address],
          },

          profile_address: {
            type: :object,
            properties: {
              street_number: {type: :string},
              street_name: {type: :string},
              unit_number: {type: :string},
              city: {type: :string},
              province: {type: :string},
              postal_code: {type: :string},
            },
            required: %w[street_number, street_name, unit_number, city, province, postal_code],
          },

          # Enums

          social_platform: {
            type: :string,
            enum: %w[google facebook apple],
          },

          app_platform: {
            type: :string,
            enum: %w[android ios web],
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
