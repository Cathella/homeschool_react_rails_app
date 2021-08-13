class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :score, :lesson_id
end
