class Customer < ApplicationRecord

  has_one_attached :avatar

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
