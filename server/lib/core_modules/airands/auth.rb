module CoreModules
  module Airands
    class Auth

      #==========================================================================
      # Public Methods
      #==========================================================================

      # validate the login information contained in token
      def self.validate(token)
        login_token = JSON.parse(token).with_indifferent_access
        account = ::Auth::Airands::Account.find_by(email: login_token[:email])
        if account && account.authenticate(login_token[:password])
          return {
            sub: account.id,
            email: account.email,
            given_name: '',
            family_name: '',
          }
        else
          raise ::Airands::Exception::Auth::BaseAuthException.new(
            ::Airands::Exception::Auth::BaseAuthException::EXCEPTION::INVALID_CREDENTIALS, "invalid login")
        end
      end

    end
  end
end
