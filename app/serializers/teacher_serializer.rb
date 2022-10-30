class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :role, :password_digest
end
