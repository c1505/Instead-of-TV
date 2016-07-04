class Activity < ActiveRecord::Base
  # require 'CSV'
  has_many :completes
  belongs_to :user

  # def self.import(file)
  #   CSV.foreach(file.path, headers: true) do |row|
  #     Activity.create! row.to_hash
  #   end
  # end

end
