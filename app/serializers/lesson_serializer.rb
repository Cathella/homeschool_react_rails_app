class LessonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :video_url, :description, :topic, :subject, :grade, :slug, :teacher_id, :average_score

  has_many :reviews
  has_many :comments
end
