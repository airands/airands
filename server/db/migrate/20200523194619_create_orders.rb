class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders, id: :uuid do |t|
      t.integer :order_type, default: 0
      t.references :customer, null: false, foreign_key: true, type: :uuid
      t.references :location_drop_off, null: false, foreign_key: true, type: :uuid
      t.references :location_pick_up, null: false, foreign_key: true, type: :uuid
      t.references :driver, foreign_key: true, type: :uuid

      t.string :order_summary, length: 1024

      t.timestamps
    end
  end
end
