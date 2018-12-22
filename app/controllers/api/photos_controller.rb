class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors, status: 422
    end
  end

  def index
    id = params[:user_id]
    @photos = id ? Photo.where(user_id: id) : Photo.all
  end

  def show
    @photo = Photo.find_by_id(params[:id])

    if @photo
      render :show
    else
      render json: ['Photo not found!'], status: 404
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])

    if @photo.update(photo_params)
      render :show
    else
      render json: ['Photo not found!'], status: 404
    end
  end

  def destroy
    @photo = current_user.photos.find(params[:id])

    if @photo
      @photo.destroy
      render :show
    else
      render json: ['Photo not found!'], status: 404
    end
  end

  private
  def photo_params
    params.require(:photo).permit(
      :user_id,
      :img_title,
      :img_description,
      :file,
      :thumb,
      :thumb_width,
      :thumb_height
    )
  end
end
