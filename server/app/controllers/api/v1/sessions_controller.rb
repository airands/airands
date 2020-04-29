class Api::V1::SessionsController < ApplicationController

  before_action only: [:destroy] do
    authenticate_cookie
  end

  def destroy
    user = current_user
    if user
      cookies.delete(:jwt)
      render json: {status: 'OK', code: 200}
    else
      render json: {status: 'session not found', code: 404}
    end
  end

  def create
    phone_number = params[:phone_number]
    confirmation_pin = params[:confirmation_pin]
    if phone_number && confirmation_pin
      login_hash = User.handle_login(phone_number, confirmation_pin)

      if login_hash
        cookies.signed[:jwt] = {value: login_hash[:token], httponly: true}
        render json: {
            user_id: login_hash[:user_id],
            phone_number: login_hash[:phone_number],
        }
      else
        render json: {status: 'incorrect phone number or pin', code: 422}
      end
    else
      render json: {status: 'phone number and pin required', code: 422}
    end
  end
end
