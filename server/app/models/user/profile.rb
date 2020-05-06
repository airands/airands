class User::Profile < ApplicationRecord

  belongs_to :user

  def self.validate_postal_code(params)
    if params[:address_postal_code].present?
      if params[:address_postal_code].length < 6
        raise Airands::Exception::ValidationException.new([:postal_code])
      end
    end
  end

  def self.validate_address(params)
    non_required = [:first_name, :last_name, :address_unit_number]
    blank_keys = params.select {|k, v| v.blank? && !non_required.include?(k) }.keys

    unless blank_keys.empty?
      raise Airands::Exception::ValidationException.new(blank_keys)
    end

  end

  def self.validate_name(params)
    first_name = params[:first_name]
    last_name = params[:last_name]

    if first_name.present? && last_name.blank? || last_name.present? && first_name.blank?
      raise Airands::Exception::ValidationException.new([:first_name, :last_name])
    end
  end

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

  def to_hash
    {
      first_name: first_name,
      last_name: last_name,
      address: {
        street_number: street_number,
        street_name: street_name,
        unit_number: unit_number,
        city: city,
        province: province,
        postal_code: postal_code,
      }
    }
  end

end
