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
  validate :ensure_photo

  has_one_attached :photo

  belongs_to :user

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached!"
    end
  end
end
