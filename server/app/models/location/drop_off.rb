class Location::DropOff < ApplicationRecord

  belongs_to :customer

  include Location::Concern
end
