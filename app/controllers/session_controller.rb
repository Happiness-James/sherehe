class SessionController < ApplicationController


    def create
        user = User.find_by(username: params[:username], password: params[:password])
    
        if user 
            render json: user
        else 
            render status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(username: params[:username], password: params[:password])
        user.destroy
        head :no_content
    end
end
