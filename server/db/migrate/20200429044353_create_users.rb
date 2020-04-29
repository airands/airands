class CreateUsers < ActiveRecord::Migration[6.0]
  def change

    create_table :users, id: :uuid do |t|
      t.string :phone_number, null: false
      t.string :confirmation_pin
      t.datetime :confirmed_at

      ## Trackable
      t.integer :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet :current_sign_in_ip
      t.inet :last_sign_in_ip

      t.timestamps
    end

    add_index :users, [:phone_number], unique: true
  end
end
