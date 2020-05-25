class Api::V1::OrdersController < ApplicationController

  before_action :authenticate_cookie

  # POST /api/v1/orders
  def create
    Rails.logger.info("CREATING ORDER\n #{create_params}")
    @order = current_user.orders.new(create_params)

    if @order.save
      render json: @order.to_hash, status: :ok
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # GET /api/v1/orders
  def show_all

  end

  # GET /api/v1/orders/:order_id
  def show

  end

  # PUT /api/v1/orders/:order_id
  def update

  end

  # DELETE /api/v1/orders/:order_id
  def destroy

  end

  private

  def create_params
    locations = params.require(:locations)
    pick_up = locations.require(:pick_up).permit(Location::Concern.permitted_params)

    order_params = {
      order_type: params.require(:order_type),
      order_summary: params.require(:order_summary),
      location_pick_up: Location::PickUp.new(pick_up),
    }

    # TODO: Ensure user profiles are complete
    # TODO: Default to current_user location_drop_off
    if locations[:drop_off].present? || true
      # drop_off = locations.require(:drop_off).permit(Location::Concern.permitted_params)
      # order_params[:drop_off] = Location::PickUp.new(drop_off)
      order_params[:location_drop_off] = Location::DropOff.new(pick_up)
    end

    order_params
  end

end
