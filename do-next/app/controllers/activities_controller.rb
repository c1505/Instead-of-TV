class ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!
  def index
    activities = Activity.all
    render json: activities, root: false
  end

  def show
    activity = Activity.find(params[:id])
    render json: activity, serializer: ActivityCompleteSerializer
  end

  def create
    activity = Activity.new(activity_params)
    activity.save
    render json: activity
  end

  def update
    activity = Activity.find(params[:id])
    activity.update(activity_params)
    render json: activity
  end

  def destroy
    activity = Activity.find(params[:id])
    activity.destroy
    activities = Activity.all
    render json: activity
  end

  def import
    Activity.import(params[:file])
    redirect_to '#/activities'
  end

  def upload
  end

  private
    def activity_params
      params.require(:activity).permit(:name, :home, :specific, :mental_attention, :movement, :min_time, :max_time)
    end

end

