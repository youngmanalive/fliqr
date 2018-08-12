# == Schema Information
#
# Table name: photos
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer          not null
#  img_title       :string           not null
#  img_description :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Photo < ApplicationRecord
  validates :user_id, :img_title, presence: true

  has_one_attached :photo
end
