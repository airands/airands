class User < ApplicationRecord

  has_one :profile

  def self.handle_login(phone_number, confirmation_pin)
    User.find_by_phone_number(phone_number)&.authenticate(confirmation_pin.upcase)
  end

  def authenticate(confirmation_pin)
    if self.confirmation_pin == confirmation_pin
      return self
    end

    false
  end

  def generate_confirmation_pin
    self.confirmation_pin = SecureRandom.hex(3).upcase
    self.save
  end

  def generate_token
    CoreModules::JsonWebToken.encode({user_id: id})
  end

  def to_hash
    {
        id: id,
        phone_number: phone_number,
    }
  end

end
