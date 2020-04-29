class User < ApplicationRecord

  before_create :generate_confirmation_pin

  def self.handle_login(phone_number, confirmation_pin)
    User.find_by_phone_number(phone_number)&.authenticate(confirmation_pin)
  end

  def authenticate(confirmation_pin)
    if self.confirmation_pin == confirmation_pin
      return to_hash
    end

    false
  end

  def to_hash
    {
        user_id: id,
        phone_number: phone_number,
        token: generate_token,
    }
  end

  private

  def generate_confirmation_pin
    self.confirmation_pin = SecureRandom.hex(3).upcase
  end

  def generate_token
    CoreModules::JsonWebToken.encode({user_id: id})
  end

end
