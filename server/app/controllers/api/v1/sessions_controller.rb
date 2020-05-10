class Api::V1::SessionsController < ApplicationController

  before_action only: [:destroy, :show] do
    authenticate_cookie
  end

  # POST /api/v1/sessions
  def create
    phone_number = create_params[:phone_number]
    confirmation_pin = create_params[:confirmation_pin]
    if phone_number && confirmation_pin
      user = User.handle_login(phone_number, confirmation_pin)

      if user
        cookies.signed[:user_id] = {value: user.id, httponly: true, expires: Time.now + 1.month}
        render json: user.to_hash
      else
        render json: {message: "Unauthorized: Incorrect pin for #{phone_number}"}, status: :unauthorized
      end
    else
      render json: {message: 'Phone number and confirmation pin are required'}, status: :unprocessable_entity
    end
  end

  # GET /api/v1/sessions
  def show
    render json: current_user&.to_hash
  end

  # DELETE /api/v1/sessions
  def destroy
    if current_user.present?
      cookies.delete(:user_id)
      render json: {message: 'OK'}, status: :ok
    else
      render json: {message: 'session not found'}, status: :not_found
    end
  end

  def create_params
    params.require(:phone_number)
    params.require(:confirmation_pin)
    params
  end

end
