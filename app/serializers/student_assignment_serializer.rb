class StudentAssignmentSerializer < ActiveModel::Serializer
  attributes :id, :score, :student, :assignment, :due_date

  def student
    self.object.student.full_name
  end

  def assignment
    self.object.assignment.name
  end

  def due_date
    self.object.assignment.due_date
  end

end
