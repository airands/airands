class Customer::Profile < ApplicationRecord

  belongs_to :customer

  has_one :location_drop_off, class_name: 'Location::DropOff'

end
