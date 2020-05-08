class Api::V1::UsersController < ApplicationController

  before_action only: [:show] do
    authenticate_cookie
  end

  # POST /api/v1/users
  def create
    @user = User.find_or_initialize_by(user_params)

    if @user.save
      @user.generate_confirmation_pin

      msg = "Airand confirmation code: #{@user.confirmation_pin}"
      Rails.logger.info("Sending SMS (+1#{@user.phone_number}): '#{msg}'")

      Airands::Comm::SMS.send_confirmation_code(@user.phone_number, @user.confirmation_pin)

      render json: {phone_number: @user.phone_number}, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # GET /api/v1/users
  def show
    render json: current_user&.to_hash, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:phone_number)
  end

end
