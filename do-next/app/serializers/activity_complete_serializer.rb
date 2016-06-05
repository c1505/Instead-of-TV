class ActivityCompleteSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :completes
end
