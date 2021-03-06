class Api::ActivitiesController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  def index
    activities = Activity.where(user_id: current_user.id)
    render json: activities, root: false
  end

  def show
    activity = Activity.find(params[:id])
    if activity.user_id == current_user.id
      render json: activity, serializer: ActivityCompleteSerializer
    else
      render :json => { :errors => activity.errors.full_messages }, :status => 422
    end
  end

  def create
    activity = Activity.new(activity_params)
    activity.user = current_user
    activity.save
    render json: activity
  end

  def update
    activity = Activity.find(params[:id])
    if activity.user_id == current_user.id
      activity.update(activity_params)
      render json: activity
    else
      render json: activity.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    activity = Activity.find(params[:id])
    if activity.user_id == current_user.id
      activity.destroy
      render json: activity
    else
      render json: activity.errors, :status => :unprocessable_entity
    end
  end

  # def import
  #   Activity.import(params[:file])
  #   redirect_to '#/activities'
  # end

  # def upload
  # end

  private
    def activity_params
      params.require(:activity).permit(:name, :home, :specific, :mental_attention, :movement, :min_time, :max_time)
    end

end

