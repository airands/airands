class Api::V1::ProfilesController < ApplicationController

  before_action :authenticate_cookie


  # PUT /api/v1/profiles
  def update
    current_user&.profile&.update(params)
    render json: current_user&.to_hash, status: :ok
  end

  # PUT /api/v1/profile/name
  def update_name
    current_user&.profile&.update(update_name_params)
    render json: current_user&.to_hash, status: :ok
  end

  # PUT /api/v1/profile/address
  def update_address
    current_user&.profile&.update(update_address_params)
    render json: current_user&.to_hash, status: :ok
  end

  private

  def update_address_params
    {
      address_street_number: params[:street_number],
      address_street_name: params[:street_name],
      address_unit_number: params[:unit_number],
      address_city: params[:city],
      address_province: params[:province],
      address_postal_code: params[:postal_code],
    }.compact
  end

  def update_name_params
    params.require(:first_name)
    params.require(:last_name)
    params.permit(:first_name, :last_name)
  end

end
