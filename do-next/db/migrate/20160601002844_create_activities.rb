class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :name
      t.string :home
      t.string :specific
      t.string :mental_attention
      t.string :movement
      t.integer :min_time
      t.integer :max_time

      t.timestamps null: false
    end
  end
end
