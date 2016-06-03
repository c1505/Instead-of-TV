class ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    activities = Activity.all
    render json: activities
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
    render json: activities
    # i want a different response than this.  need to find what is appropriate.  200 + ok?
  end

  private
    def activity_params
      params.require(:activity).permit(:name, :home, :specific, :mental_attention, :movement, :min_time, :max_time)
    end

end

