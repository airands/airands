class Api::V1::UsersController < ApplicationController

  before_action only: [:show] do
    authenticate_cookie
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: {phone_number: @user.phone_number}, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: current_user&.to_hash, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:phone_number)
  end

end
