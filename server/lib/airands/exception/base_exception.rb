module Airands

  EXCEPTION_VALIDATION = 'exception_validation'
  EXCEPTION_UNAUTHORIZED = 'exception_unauthorized'

  module Exception
    class BaseException < StandardError

      attr_accessor :error_code
      attr_accessor :message
      attr_accessor :data

      def initialize(error_code, message, data = nil)
        self.message = message
        self.error_code = error_code
        self.data = data
      end

    end
  end
end
