class Api::AlbumsController < ApplicationController
  def create
  end

  def index
  end

  def show
  end

  def update
  end
  
  def destroy
  end

  def album_params
    params.require(:album).permit(
      :album_title,
      :album_description
    )
  end
end