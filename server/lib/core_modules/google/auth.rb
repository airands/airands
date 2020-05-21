module CoreModules
  module Google
    class Auth

      def self.validate(token, client_id)
        required_audience = JWT.decode(token, nil, false)[0]['aud']
        self.validator.check(token, required_audience, client_id)
      end

      private
      # @return [GoogleIDToken::Validator]
      def self.validator
        GoogleIDToken::Validator.new(expiry: 1800)
      end
    end
  end
end
