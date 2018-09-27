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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
