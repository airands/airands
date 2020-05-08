module Airands
  module Comm
    class SMS

      def self.client
        ::Twilio::REST::Client.new
      end

      def self.send_confirmation_code(phone, confirmation_code)
        self.client.messages.create({
            from: Rails.application.credentials.twilio[:phone_number],
            to: phone,
            body: "#{confirmation_code} is your airands verification code. Don't reply to this message with your code.",
        })
      end

    end
  end
end
