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

  belongs_to :user

  def ensure_file
    unless self.file.attached?
      errors[:file] << "must be attached!"
    end
  end
end
