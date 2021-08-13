class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :author
end
