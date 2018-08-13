class UpdatePhotos < ActiveRecord::Migration[5.2]
  def change
    change_column_null :photos, :img_title, false
  end
end
