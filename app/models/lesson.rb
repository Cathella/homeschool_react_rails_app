class Lesson < ApplicationRecord
  belongs_to :teacher
  has_many :comments
  has_many :reviews

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end

  def average_score
    return 0 unless reviews.count.positive?
    
    reviews.average(:score).to_f.round(2)
  end
end
