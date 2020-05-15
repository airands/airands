class CreateCustomerProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :customer_profiles, id: :uuid do |t|
      t.references :customer, null: false, foreign_key: true, type: :uuid

      t.string :first_name, length: 40
      t.string :last_name, length: 40

      t.references :location_drop_off, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
