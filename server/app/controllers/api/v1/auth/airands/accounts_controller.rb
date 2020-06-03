module Api::V1::Auth
  module Airands
    class AccountsController < ApplicationController
      before_action :authenticate_cookie, except: [:create]

      #==========================================================================
      # Endpoints
      #==========================================================================

      # POST. create a new account
      def create
        params.require([:email, :password])

        begin
          new_account = ::Auth::Airands::Account.create(email: params[:email],
                                                        password: params[:password],
                                                        password_confirmation: params[:password])
          success_response(new_account.to_hash)
        rescue ActiveRecord::RecordNotUnique => e
          # account already exists
          error_response(ERROR_CODE::ACCOUNT_EXISTS, 'Account already exists', :bad_request)
        end
      end

      # PUT. update a account
      def update
        # TODO this
      end


    end
  end
end
