class TeacherSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :lessons
end
