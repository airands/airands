class Customer < ApplicationRecord

  has_one_attached :avatar

  has_one :location_drop_off, class_name: 'Location::DropOff'

  def update_trackable(request_ip)
    update_attribute(:sign_in_count, sign_in_count + 1)
    update_attributes(
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
    ret = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      auth_provider: auth_provider,
      auth_provider_uid: auth_provider_uid,
    }

    if avatar.attached?
      ret[:avatar_url] = Rails.application.routes.url_helpers.rails_blob_path(avatar, only_path: true)
    end

    ret
  end

end
