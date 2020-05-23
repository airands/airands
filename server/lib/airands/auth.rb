module Airands
  class Auth

    PROVIDER_FACEBOOK = :facebook
    PROVIDER_GOOGLE = :google
    PROVIDER_APPLE = :apple
    AUTH_PROVIDERS = [PROVIDER_FACEBOOK, PROVIDER_GOOGLE, PROVIDER_APPLE]

    def self.authenticate(token, auth_provider, platform = :ios)
      if auth_provider == PROVIDER_GOOGLE
        CoreModules::Google::Auth.validate(token, Airands::Credentials.google_client_id(platform)).symbolize_keys
      elsif auth_provider == PROVIDER_FACEBOOK
        # TODO
      elsif auth_provider == PROVIDER_APPLE
        # TODO
      else
        # TODO: Exception
      end
    end

  end
end
