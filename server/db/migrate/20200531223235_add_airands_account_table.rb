class AddAirandsAccountTable < ActiveRecord::Migration[6.0]
  def change
    create_table :auth_airands_accounts, id: :uuid do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :email_confirmation_token
      t.string :password_reset_token
      t.timestamp :password_reset_token_expire_at
      t.timestamps
    end

    add_index :auth_airands_accounts, :email, unique: true
  end
end
