class ApplicationController < ActionController::API
  include ActionController::Cookies

  def authenticate_cookie
    user = nil
    token = cookies.signed[:jwt]
    decoded_token = CoreModules::JsonWebToken.decode(token)
    if decoded_token
      user = User.find_by(id: decoded_token['user_id'])
    end

    if user.nil?
      render json: {message: 'You are not logged in'}, status: :unauthorized
    else
      true
    end
  end

  # @return [User]
  def current_user
    user = nil
    token = cookies.signed[:jwt]
    decoded_token = CoreModules::JsonWebToken.decode(token)
    if decoded_token
      user = User.find_by(id: decoded_token["user_id"])
    end

    user
  end
end
