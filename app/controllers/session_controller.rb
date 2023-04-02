class SessionController < ApplicationController


    def create
        user = User.find_by(username: params[:username], password: params[:password])
    
        if user
            session[:user_id]=user.id 
            render json: user
        else 
            render status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id)
        head :no_content
    end
end
