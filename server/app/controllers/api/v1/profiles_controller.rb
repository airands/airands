class Api::V1::ProfilesController < ApplicationController

  before_action :authenticate_cookie

  # PUT /api/v1/profiles
  def update
    Rails.logger.info("\n===== UPDATING PROFILE =====\n")
    Rails.logger.info(update_params)
    current_user&.profile&.update(update_params)
    render json: current_user&.to_hash, status: :ok
  end

  private

  def update_params
    address = params.require(:address)
    {
      first_name: params.require(:first_name),
      last_name: params.require(:last_name),
      address_street_number: address[:street_number],
      address_street_name: address[:street_name],
      address_unit_number: address[:unit_number],
      address_city: address[:city],
      address_province: address[:province],
      address_postal_code: address[:postal_code],
    }
  end

end
