class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def index
  # end

  def show
    @user = User.find(params[:id])
    if @user
      render 'api/users/show'
    else
      reunder json: @user.errors.full_messages, status: 404
    end
  end

  # def update
  # end

  # def destroy
  # end

  private
  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :fname,
      :lname
    )
  end
end
