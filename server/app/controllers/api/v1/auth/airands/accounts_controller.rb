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
          render json: new_account, status: @status
        rescue ActiveRecord::RecordNotUnique => e
          # account already exists
          render json: Error::AirandsAuthErrorResponse.new("account with email #{params[:email]} already exists",
                                                           Error::AirandsAuthErrorResponse::CODE::ACCOUNT_EXISTS),
                 status: :bad_request
        end
      end

      # PUT. update a account
      def update
        render json: {}, status: @status
      end


    end
  end
end
