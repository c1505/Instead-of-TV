require 'csv'

csv_text = File.read('data.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  Activity.create!(row.to_hash)
end