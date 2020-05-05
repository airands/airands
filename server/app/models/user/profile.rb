class User::Profile < ApplicationRecord

  belongs_to :user

  # @return [Boolean]
  def name_complete?
    first_name.present? && last_name.present?
  end

  # @return [Boolean]
  def address_complete?
    street_number.present? && street_name.present? && city.present? &&
      province.present? && postal_code.present?
  end


  def street_name
    self.address_street_name
  end

  def street_number
    self.address_street_number
  end

  def unit_number
    self.address_unit_number
  end

  def city
    self.address_city
  end

  def province
    self.address_province
  end

  def postal_code
    self.address_postal_code
  end

end
