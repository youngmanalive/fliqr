@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :user_id, :body, :created_at
    json.extract! comment.user, :fname, :lname
  end
end