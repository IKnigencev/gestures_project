class CreateLesson < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :description
      t.integer :priority_index
      t.string :access_users, default: ""

      t.timestamps
    end
  end
end
