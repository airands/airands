class Order < ApplicationRecord

  enum order_type: {
    commercial_pick_up: 0,
    private_pick_up: 1,
  }

  belongs_to :customer

  belongs_to :location_pick_up, class_name: 'Location::PickUp'
  belongs_to :location_drop_off, class_name: 'Location::DropOff'

  def to_hash
    {
      order_type: order_type,
      order_summary: order_summary,
      locations: {
        pick_up: location_pick_up&.to_hash,
        drop_off: location_drop_off&.to_hash,
      },
    }
  end

end
