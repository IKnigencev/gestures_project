class CreateStepsLesson < ActiveRecord::Migration[7.0]
  def change
    create_table :steps_lessons do |t|
      t.integer :lesson_id, null: false, index: true
      t.string :title
      t.string :answer
      t.string :question
      t.integer :priority_index
      t.string :type_question, default: "text"

      t.timestamps
    end
  end
end
