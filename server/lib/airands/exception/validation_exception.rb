module Airands
  module Exception
    class ValidationException < BaseException

      DEFAULT_MESSAGE = 'Validation exception'

      def initialize(fields, message = DEFAULT_MESSAGE)
        super(Airands::EXCEPTION_VALIDATION, message, {fields: fields})
      end

    end
  end
end
