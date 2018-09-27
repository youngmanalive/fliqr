# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

# class UserValidator < ActiveModel::Validator
#   def validate(record)
#     if record.fname.empty?
#       record.errors[:first] << "name can't be blank"
#     end
#   end
# end
# include ActiveModel::Validations
# validates_with UserValidator


class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :fname, :lname, presence: true

  after_initialize :ensure_session_token

  has_many :photos
  has_many :comments
  has_many :albums

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
