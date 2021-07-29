class Lesson < ApplicationRecord
  belongs_to :teacher
  has_many :comments
  has_many :reviews

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end

  def average_score
    reviews.average(:score).round(2).to_f
  end
end
