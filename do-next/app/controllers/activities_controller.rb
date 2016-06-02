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

  private
    def activity_params
      params.require(:activities).permit(:name, :home, :specific, :mental_attention, :movement, :min_time, :max_time)
    end

end

