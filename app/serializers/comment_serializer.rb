class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :author, :lesson_id
end
