# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  session_token   :string           not null
#  full_name       :string
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :email, presence: true, uniqueness: true
  validates :full_name, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return unless user
    user.password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    save!
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
