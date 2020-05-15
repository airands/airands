class CreateLocationPickUps < ActiveRecord::Migration[6.0]
  def change
    create_table :location_pick_ups, id: :uuid do |t|
      t.string :street_number, length: 16
      t.string :street_name, length: 32
      t.string :unit_number, length: 8
      t.string :city, length: 32
      t.string :province, length: 2
      t.string :postal_code, length: 6

      t.timestamps
    end
  end
end
