class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    photo_ids = JSON.parse(params[:photo_ids])

    if @album.save
      photo_ids.each do |id|
        AlbumPhoto.create(photo_id: id, album_id: @album.id)
      end
      render :show
    else
      render json: ['Error creating album'], status: 422
    end
  end

  def index
    id = params[:user_id]
    @albums = Album.where(user_id: id)
    render :index
  end

  def show
    @album = Album.find_by_id(params[:id])
    
    if @album
      render :show
    else
      render json: ['Album not found!'], status: 404
    end
  end

  def update
    @album = Album.find_by_id(params[:id])
    @album.album_photos.destroy_all
    photo_ids = JSON.parse(params[:photo_ids])

    if @album.update(album_params)
      photo_ids.each do |id|
        AlbumPhoto.create(photo_id: id, album_id: @album.id)
      end
      render :show
    else
      render json: ['Error updating album'], status: 422
    end
  end
  
  def destroy
    @album = current_user.albums.find(params[:id]);

    if (@album)
      @album.destroy
      render :show
    else
      render json: ['Album not found'], status: 404
    end
  end

  def album_params
    params.require(:album).permit(
      :album_title,
      :album_description
    )
  end
end