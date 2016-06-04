class CreateCompletes < ActiveRecord::Migration
  def change
    create_table :completes do |t|
      t.integer :rating
      t.text :note
      t.integer :activity_id

      t.timestamps null: false
    end
  end
end
