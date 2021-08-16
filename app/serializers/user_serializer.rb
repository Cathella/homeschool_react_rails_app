class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :age, :grade
end
