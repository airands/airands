module Airands
  class Auth

    PROVIDER_FACEBOOK = :facebook
    PROVIDER_GOOGLE = :google
    PROVIDER_APPLE = :apple
    PROVIDER_AIRANDS = :airands
    AUTH_PROVIDERS = [PROVIDER_FACEBOOK, PROVIDER_GOOGLE, PROVIDER_APPLE]

    def self.authenticate(token, auth_provider, platform = :ios)
      case auth_provider
      when PROVIDER_GOOGLE
        CoreModules::Google::Auth.validate(token, Airands::Credentials.google_client_id(platform)).symbolize_keys
      when PROVIDER_FACEBOOK
        # TODO
      when PROVIDER_APPLE
        # TODO
      when PROVIDER_AIRANDS
        ::CoreModules::Airands::Auth.validate(token)
      else
        # TODO: Exception
      end
    end

  end
end
