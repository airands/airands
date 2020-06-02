class AddLatLngToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :lat, :string
    add_column :locations, :lng, :string
  end
end
