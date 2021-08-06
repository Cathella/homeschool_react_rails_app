class Teacher < ApplicationRecord
  has_many :lessons

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end
