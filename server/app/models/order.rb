class Order < ApplicationRecord

  enum order_type: {
    commercial_pick_up: 0,
    private_pick_up: 1,
  }

  belongs_to :customer
  belongs_to :runner, optional: true

  belongs_to :pick_up_location, class_name: 'Location', optional: true
  belongs_to :drop_off_location, class_name: 'Location', optional: true

  def to_hash
    {
      order_type: order_type,
      order_description: order_description,
      locations: {
        pick_up: pick_up_location&.to_hash,
        drop_off: drop_off_location&.to_hash,
      },
    }
  end

end
