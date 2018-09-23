json.extract! @photo, :id, :img_title, :img_description, :user_id, :created_at
json.extract! @photo.user, :username, :fname, :lname
json.set! :commentIds, @photo.comments.pluck(:id)
json.photoUrl url_for(@photo.file)
