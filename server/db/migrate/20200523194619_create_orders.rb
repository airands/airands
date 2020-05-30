class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders, id: :uuid do |t|
      t.timestamps

      t.belongs_to :customer, type: :uuid
      t.belongs_to :driver, type: :uuid

      t.integer :order_type, default: 0
      t.references :pick_up_location, foreign_key: { to_table: :locations }, type: :uuid
      t.references :drop_off_location, foreign_key: { to_table: :locations }, type: :uuid
      t.string :order_description, length: 1024
    end
  end
end
