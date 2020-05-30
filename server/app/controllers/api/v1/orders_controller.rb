class Api::V1::OrdersController < ApplicationController

  before_action :authenticate_cookie

  # POST /api/v1/orders
  def create
    @order = current_user.orders.new(create_params)

    if @order.save
      render json: @order.to_hash, status: :ok
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # GET /api/v1/orders
  def show_all
    @orders = current_user.orders
    render json: @orders.map(&:to_hash), status: :ok
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
    pick_up = locations.require(:pick_up).permit(Location.permitted_params)

    order_params = {
      order_type: params.require(:order_type),
      order_description: params.require(:order_description),
      pick_up_location: Location.new(pick_up),
    }

    # TODO: Ensure user profiles are complete
    # TODO: Default to current_user primary_location
    if locations[:drop_off].present? || true
      # drop_off = locations.require(:drop_off).permit(Location::Concern.permitted_params)
      # order_params[:drop_off] = Location::PickUp.new(drop_off)
      order_params[:drop_off_location] = Location.new(pick_up)
    end

    order_params
  end

end
