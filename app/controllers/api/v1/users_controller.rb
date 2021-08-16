module Api
  module V1
    class UsersController < ApplicationController
      protect_from_forgery with: :null_session
      
      before_action :authorized, only: [:auto_login]

      # Register user
      def create
        @user = User.create(user_params)

        if @user.valid?
          token = encode_token({user_id: @user.id})
          render json: { user: @user, token: token }
        else
          render json: { error: "Invalid username or password" }
        end
      end

      # Loggin User
      def login
        @user = User.find_by(username: params[:username])

        if @user && @user.authenticate(params[:password])
          token = encode_token({user_id: @user.id})
          render json: {user: @user, token: token}
        else
          render json: { error: "Invalid username or password" }
        end
      end

      def auto_login
        render json: @user
      end

      private

      def user_params
        params.permit(:username, :password, :age, :grade, :phone)
      end
    end
  end
end
