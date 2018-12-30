json.extract! @photo, :id, :img_title, :img_description, :user_id, :created_at, :thumb_width, :thumb_height
json.extract! @photo.user, :username, :fname, :lname
json.set! :commentIds, @photo.comments.pluck(:id)
json.src url_for(@photo.file)
json.thumbUrl url_for(@photo.thumb)