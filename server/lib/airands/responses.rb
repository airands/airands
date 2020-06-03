module Airands::Responses

  module STATUS
    SUCCESS = 'success'.freeze
    ERROR = 'error'.freeze
  end

  module ERROR_CODE
    GENERIC = 'generic'.freeze
    UNAUTHORIZED = 'unauthorized'.freeze

    ACCOUNT_EXISTS = 'account_exists'.freeze
  end

  # send a success response to the client
  # @param [] data - a hash or object that response to, to_hash that is to be sent to the client.
  # @param [Symbol] status - the HTTP status to send to the client
  def success_response(data, status = @status)
    render json: {status: STATUS::SUCCESS, data: data, error: {}}, status: status
  end

  # send an error response to the client
  # @param [String] code - a code indicating the type of error
  # @param [String] message - an error message
  # @param [Symbol] status - the HTTP status code to return
  def error_response(code, message, status = @status)
    render json: {status: STATUS::ERROR, data: {}, error: {code: code, message: message}}, status: status
  end

end