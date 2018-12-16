# == Schema Information
#
# Table name: photos
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer          not null
#  img_description :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  img_title       :string           not null
#

class Photo < ApplicationRecord
  validates :user_id, :img_title, presence: true
  validate :ensure_file

  has_one_attached :file
  has_one_attached :thumb

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :album_photos, dependent: :destroy
  has_many :albums,
    through: :album_photos,
    source: :album

  def ensure_file
    unless self.file.attached?
      errors[:file] << "must be attached!"
    end
  end
end
