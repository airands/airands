module Airands
  class Credentials

    def self.google_client_id(platform = :ios)
      Rails.application.credentials.google[:oauth2][platform]
    end

  end
end
