class ApplicationController < ActionController::API
  include ActionController::Cookies

  def authenticate_cookie
    user_id = cookies.signed[:customer_id]
    user = Customer.find_by(id: user_id)

    if user.nil?
      render json: {message: 'You are not logged in'}, status: :unauthorized
    else
      true
    end
  end

  # @return [Customer]
  def current_user
    user_id = cookies.signed[:customer_id]
    Customer.find_by(id: user_id)
  end

end
