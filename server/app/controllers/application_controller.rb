class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ::Airands::Dto

  around_action :action_wrapper

  def action_wrapper
    begin
      yield
    rescue ::Airands::Exception::Auth::BaseAuthException => e
      render json: {}, status: :unauthorized
    rescue Exception => e
      Rails.logger.info("Unhandled error: #{e.to_s} #{e.message} \n #{e.backtrace.join("\n")}")
      render json: {}, status: :internal_server_error
    end
  end

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
