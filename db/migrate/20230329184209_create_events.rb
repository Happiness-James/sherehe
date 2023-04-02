class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :location
      t.date :Date
      t.time :showtime
      t.integer :Available_tickets
      t.string :price
      t.string :integer
      t.string :category
      t.string :poster
      t.integer :user_id

      t.timestamps
    end
  end
end
