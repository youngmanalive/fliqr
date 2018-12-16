class AddColumnsToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :thumb_width, :integer
    add_column :photos, :thumb_height, :integer
  end
end
