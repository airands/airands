class User < ApplicationRecord

  has_one :profile

  before_create :create_profile

  def self.handle_login(phone_number, confirmation_pin)
    User.find_by_phone_number(phone_number)&.authenticate(confirmation_pin.upcase)
  end

  def authenticate(confirmation_pin)
    if self.confirmation_pin == confirmation_pin
      return self
    end

    false
  end

  def complete_profile?
    profile.name_complete? && profile.address_complete?
  end

  def generate_confirmation_pin
    self.confirmation_pin = SecureRandom.hex(3).upcase
    self.save
  end

  def generate_token
    CoreModules::JsonWebToken.encode({user_id: id})
  end

  def create_profile
    self.profile = User::Profile.create
  end

  def to_hash
    {
        id: id,
        phone_number: phone_number,
        profile: profile.to_hash,
        complete_profile: complete_profile?,
        complete_name: profile.name_complete?,
        complete_address: profile.address_complete?,
        complete_billing: false, # TODO: User billing
    }
  end

end
