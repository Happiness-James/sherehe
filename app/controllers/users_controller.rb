class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        users = User.all 
        render json: users
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "not authorized"}, status: :unauthorized
        end

    end

    def create
        user = User.create(user_params)
        render json: user
    end

    private
    
    def user_params
      params.permit(:username, :email, :password)
    end
    def render_not_found_response
        render json: { error: "Event not found" }, status: :not_found
    end
end
