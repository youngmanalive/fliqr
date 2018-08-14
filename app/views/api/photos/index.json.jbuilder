@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :img_title, :img_description, :user_id
    json.username photo.user.username
    json.photoUrl url_for(photo.photo)
  end
end
