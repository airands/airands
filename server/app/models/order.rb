class Order < ApplicationRecord

  enum order_type: {
    commercial_pick_up: 0,
    private_pick_up: 1,
  }

  belongs_to :customer

  has_one :location_pick_up, class_name: 'Location::PickUp'
  has_one :location_drop_off, class_name: 'Location::DropOff'

end
