class CreateDriverProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :driver_profiles, id: :uuid do |t|
      t.references :driver, null: false, foreign_key: true, type: :uuid

      t.string :first_name, length: 40
      t.string :last_name, length: 40

      t.timestamps
    end
  end
end
