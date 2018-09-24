json.extract! @comment, :id, :user_id, :photo_id, :body, :created_at
json.extract! @comment.user, :fname, :lname
