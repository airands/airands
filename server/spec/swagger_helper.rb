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
              default: 'dev2.airands.ca'
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

          error_response: {
            type: :object,
            properties: {
              message: { type: :string},
              code: {'$ref': '#/components/schemas/error_code'},
            }
          },

          # ======================== Application DTOs ===============================

          customer_dto: {
            type: :object,
            properties: {
              email: {type: :string},
              first_name: {type: :string},
              last_name: {type: :string},
              phone_number: {type: :string},
              auth_provider: {type: :string},
              auth_provider_uid: {type: :string},
              avatar_url: {type: :string},
              address: {'$ref': '#/components/schemas/location_address'},
            },
            required: %w[email first_name last_name auth_provider],
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

          location_address: {
            type: :object,
            properties: {
              street_number: {type: :string},
              street_name: {type: :string},
              unit_number: {type: :string},
              city: {type: :string},
              province: {type: :string},
              postal_code: {type: :string},
              location_name: {type: :string},
              location_type: {'$ref': '#/components/schemas/location_type'},
            },
            required: %w[street_number street_name city province postal_code],
          },

          order: {
            type: :object,
            properties: {
                order_type: {'$ref': '#/components/schemas/order_type'},
                order_description: {type: :string},
                locations: {'$ref': '#/components/schemas/new_order_locations'},
            },
            required: %w[],
          },

          new_order: {
            type: :object,
            properties: {
              order_type: {'$ref': '#/components/schemas/order_type'},
              order_description: {type: :string},
              locations: {'$ref': '#/components/schemas/new_order_locations'},
            },
            required: %w[order_type order_description locations],
          },

          new_order_locations: {
            type: :object,
            properties: {
              pick_up: {'$ref': '#/components/schemas/location_address'},
              drop_off: {'$ref': '#/components/schemas/location_address'},
            },
            required: %w[pick_up drop_off],
          },

          airands_account: {
              type: :object,
              properties: {
                  id: {
                    type: :string
                  },
                  email: {
                    type: :string
                  },
                  password: {
                    type: :string
                  }
              }
          },

          # ============================ Enums =============================

          social_platform: {
            type: :string,
            enum: %w[google facebook apple],
          },

          app_platform: {
            type: :string,
            enum: %w[android ios web],
          },

          order_type: {
            type: :string,
            enum: %w[commercial_pick_up private_pick_up],
          },

          location_type: {
            type: :string,
            enum: %w[commercial residential],
          },

          error_code: {
            type: :string,
            enum: %w[generic account_exists]
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
