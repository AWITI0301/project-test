class StudentSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :image, :email, :admission_no, :phone_no, :teacher, :classroom, :username, :role, :subject

  def classroom
    self.object.classroom.name
  end

  def teacher
    self.object.classroom.teacher.full_name
  end

  def subject
    self.object.subject.name
  end

end
