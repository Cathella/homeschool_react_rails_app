class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :phone
      t.string :grade
      t.integer :age

      t.timestamps
    end
  end
end
