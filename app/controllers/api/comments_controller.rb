class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: ['Comment error'], status: 422
    end
  end

  def index
    @comments = Comment.where(photo_id: params[:photo_id])
  end

  def destroy
    @comment = current_user.comments.find(params[:id])

    if @comment
      @comment.destroy
      render json: { "id": @comment.id, "photo_id": @comment.photo_id }
    else
      render json: ['Comment not found'], status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(
      :photo_id,
      :body
    )
  end
end