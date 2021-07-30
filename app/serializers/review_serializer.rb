class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :lesson_id
end
