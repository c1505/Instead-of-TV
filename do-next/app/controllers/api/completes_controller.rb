class Api::CompletesController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  
  def create
    activity = Activity.find(params[:activity_id])
    if activity.user_id = current_user.id
      complete = activity.completes.build(rating: params[:rating], note: params[:note])
      complete.save
      render json: complete
    else
      render json: {}, :status => :unprocessable_entity
    end
  end

  def destroy
    complete = Complete.find(params[:id])
    if complete.activity.user_id = current_user.id
      complete.destroy
      render json: complete
    else
      render json: {}, :status => :unprocessable_entity
    end
  end

  def update
    complete = Complete.find(params[:id])
    if complete.activity.user_id = current_user.id
      complete.update(rating: params[:rating])
      render json: complete
    else
      render json: {}, :status => :unprocessable_entity
    end
  end

end