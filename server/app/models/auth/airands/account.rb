class Auth::Airands::Account < ActiveRecord::Base
  has_secure_password

  #==========================================================================
  # Public methods
  #==========================================================================

  def to_hash
    {
      id: id,
      email: email,
      password: password,
    }
  end
end