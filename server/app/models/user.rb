class User < ApplicationRecord

  PROFILE_STATUS_NAME = 'profile_status_name'
  PROFILE_STATUS_ADDRESS = 'profile_status_address'
  PROFILE_STATUS_BILLING = 'profile_status_billing'
  PROFILE_STATUS_COMPLETE = 'profile_status_complete'

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

  def profile_status
    if !profile.name_complete?
      PROFILE_STATUS_NAME
    elsif !profile.address_complete?
      PROFILE_STATUS_ADDRESS
    else
      PROFILE_STATUS_COMPLETE
    end
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
        profile_status: profile_status,
    }
  end

end
