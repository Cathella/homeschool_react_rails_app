class TeacherSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug

  # has_many :lessons
end
