class Customer < ApplicationRecord

  has_one_attached :avatar

  belongs_to :primary_location, class_name: 'Location', optional: true

  has_many :orders

  def update_trackable(request_ip)
    update(
      {
        sign_in_count: sign_in_count + 1,
        current_sign_in_at: DateTime.now.to_s,
        last_sign_in_at: current_sign_in_at,
        current_sign_in_ip: request_ip,
        last_sign_in_ip: current_sign_in_ip,
      }
    )
  end

  def to_hash
    customer_hash = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      auth_provider: auth_provider,
      address: self.location_drop_off&.to_hash,
    }

    if avatar.attached?
      customer_hash[:avatar_url] = Rails.application.routes.url_helpers.rails_blob_path(avatar, only_path: true)
    end

    customer_hash
  end

  # Temp empty method
  def location_drop_off
    # TODO Added customer home location association
  end

end
