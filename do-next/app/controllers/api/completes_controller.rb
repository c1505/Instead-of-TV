class Api::CompletesController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  
  def create
    activity = Activity.find(params[:activity_id])
    complete = activity.completes.build(rating: params[:rating], note: params[:note])
    complete.save
    render json: complete
  end

  def destroy
    complete = Complete.find(params[:id])
    complete.destroy
    render json: complete
  end

  def update
    complete = Complete.find(params[:id])
    complete.update(rating: params[:rating])
    render json: complete
  end

end