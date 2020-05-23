module LocationConcern

  enum location_type: {
    commercial: 0,
    residential: 1,
  }

  def self.validate_postal_code(params)
    if params[:postal_code].present?
      if params[:postal_code].length < 6
        raise Airands::Exception::ValidationException.new([:postal_code])
      end
    end
  end

  def self.validate_address(params)
    non_required = [:first_name, :last_name, :unit_number]
    blank_keys = params.select {|k, v| v.blank? && !non_required.include?(k) }.keys

    unless blank_keys.empty?
      raise Airands::Exception::ValidationException.new(blank_keys)
    end
  end

  # @return [Boolean]
  def complete?
    street_number.present? && street_name.present? && city.present? && province.present? && postal_code.present?
  end

end
