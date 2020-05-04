class CreateUserProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_profiles, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :first_name, length: 40
      t.string :last_name, length: 40

      t.string :address_street_number, length: 16
      t.string :address_street_name, length: 32
      t.string :address_unit_number, length: 8
      t.string :address_city, length: 32
      t.string :address_province, length: 2
      t.string :address_postal_code, length: 6

      t.timestamps
    end
  end
end
