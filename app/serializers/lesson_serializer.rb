class LessonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :video_url, :description, :topic, :subject, :grade, :slug, :teacher_id

  has_many :reviews
  has_many :comments
end
