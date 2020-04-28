# frozen_string_literal: true

# Include default devise modules. Others available are:
# :confirmable, :lockable, :timeoutable and :omniauthable

class User < ActiveRecord::Base
  extend Devise::Models

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

  include DeviseTokenAuth::Concerns::User

end
