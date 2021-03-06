class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers, id: :uuid do |t|
      t.timestamps

      t.string :email, null: false
      t.string :first_name, length: 40
      t.string :last_name, length: 40
      t.string :phone_number, length: 14

      t.string :auth_provider, length: 40, null: false
      t.string :auth_provider_uid

      t.references :primary_location, foreign_key: { to_table: :locations }, type: :uuid

      ## Trackable
      t.integer :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet :current_sign_in_ip
      t.inet :last_sign_in_ip
    end

    add_index :customers, [:email], unique: true
  end
end
