class Airands::Dto::Error::ErrorResponse
  module CODE
    GENERIC = 'generic'.freeze
  end

  attr_accessor :message, :code

  #==========================================================================
  # Public Methods
  #==========================================================================

  # @param [string] message - error message
  # @param [CODE] code - error code
  def initialize(message, code)
    @message = message
    @code = code
  end

  def to_hash
    {
      message: @message,
      code: @code,
    }
  end

end