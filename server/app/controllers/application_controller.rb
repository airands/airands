class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ::Airands::Dto
  include ::Airands::Responses

  around_action :action_wrapper

  attr_accessor :current_user

  def action_wrapper
    begin
      yield
    rescue ::Airands::Exception::Auth::BaseAuthException => e
      error_response(ERROR_CODE::UNAUTHORIZED, 'Authentication Error', :unauthorized)
    rescue Exception => e
      Rails.logger.info("Unhandled error: #{e.to_s} #{e.message} \n #{e.backtrace.join("\n")}")
      error_response(ERROR_CODE::GENERIC, 'Internal server error', :internal_server_error)
    end
  end

  def authenticate_cookie
    user_id = cookies.signed[:customer_id]
    @current_user = Customer.find_by(id: user_id)

    if @current_user.nil?
      error_response(ERROR_CODE::UNAUTHORIZED, 'You are not logged in', :unauthorized)
    else
      true
    end
  end

end
