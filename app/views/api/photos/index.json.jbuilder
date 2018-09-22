@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :img_title, :img_description, :user_id
    json.extract! photo.user, :fname, :lname
    json.photoUrl url_for(photo.file)
  end
end
