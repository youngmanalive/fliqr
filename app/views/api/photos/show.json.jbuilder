json.extract! @photo, :id, :img_title, :img_description, :user_id
json.photoUrl url_for(@photo.photo)
json.username @photo.user.username
json.user_fname @photo.user.fname
