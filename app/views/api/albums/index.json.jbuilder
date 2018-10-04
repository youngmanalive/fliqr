@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :album_title, :album_description, :user_id
    json.set! :photoIds, album.photos.pluck(:id)
  end
end