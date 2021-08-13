class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :video_url
      t.text :description
      t.string :topic
      t.string :subject
      t.string :grade
      t.string :slug
      # t.belongs_to :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
