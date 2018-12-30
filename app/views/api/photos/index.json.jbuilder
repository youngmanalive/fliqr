@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :img_title, :img_description, :created_at, :user_id, :thumb_width, :thumb_height
    json.extract! photo.user, :fname, :lname
    json.set! :commentIds, photo.comments.pluck(:id)
    json.src url_for(photo.file)
    json.thumbUrl url_for(photo.thumb)
  end
end
