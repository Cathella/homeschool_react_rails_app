class LessonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :video_url, :description, :topic, :subject, :grade, :slug, :average_score, :user_id

  has_many :reviews
end
