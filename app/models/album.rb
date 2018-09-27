# == Schema Information
#
# Table name: albums
#
#  id                :bigint(8)        not null, primary key
#  user_id           :integer          not null
#  album_title       :string           not null
#  album_description :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Album < ApplicationRecord
  validates :user_id, :album_title, presence: true

  belongs_to :user
  has_many :album_photos, dependent: :destroy
  has_many :photos,
    through: :album_photos,
    source: :photo
end
