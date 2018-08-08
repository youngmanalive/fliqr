class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
  end

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
