class Api::V1::CustomersController < ApplicationController

  before_action only: [:show] do
    authenticate_cookie
  end

  # POST /api/v1/users
  def create

    user_data = customer_data_params
    provider_token = params[:auth_provider_token]
    platform = params[:app_platform].to_sym

    verified = ::Airands::Auth.authenticate(provider_token, user_data[:auth_provider].to_sym, platform)

    Rails.logger.info("VERIFIED: #{verified}")

    customer_params = {
      email: verified[:email],
      first_name: verified[:given_name],
      last_name: verified[:family_name],
      auth_provider: user_data[:auth_provider],
      auth_provider_uid: verified[:sub],
    }

    @customer = Customer.find_or_initialize_by(customer_params)

    if @customer.save
      require 'open-uri'

      if !@customer.avatar.attached? && verified[:picture].present?
        download = open(verified[:picture])
        file_path = Rails.root + "storage/#{verified[:sub]}"
        IO.copy_stream(download, file_path)

        @customer.avatar.attach(io: File.open(file_path), filename: verified[:sub])
        File.delete(file_path)
      end


      cookies.signed[:customer_id] = {value: @customer.id, httponly: true, expires: Time.now + 3.months}
      render json: @customer.to_hash, status: :created
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # GET /api/v1/users
  def show
    render json: current_user&.to_hash, status: :ok
  end

  private

    def customer_data_params
      params.require(:user_data).permit(:auth_provider, :auth_provider_uid, :email, :first_name, :last_name)
    end

end
