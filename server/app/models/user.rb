class User < ApplicationRecord

  def self.handle_login(phone_number, confirmation_pin)
    User.find_by_phone_number(phone_number)&.authenticate(confirmation_pin.upcase)
  end

  def authenticate(confirmation_pin)
    true
  end

  def complete_profile?
    profile.name_complete? && profile.address_complete?
  end

  def generate_token
    CoreModules::JsonWebToken.encode({user_id: id})
  end

  def to_hash
    {
        email: email,
        first_name: first_name,
        last_name: last_name,
        auth_provider: auth_provider,
        # profile: profile.to_hash,
        # complete_profile: complete_profile?,
        # complete_name: profile.name_complete?,
        # complete_address: profile.address_complete?,
        # complete_billing: false, # TODO: User billing
    }
  end

end
