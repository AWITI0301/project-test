class StudentAssesmentSerializer < ActiveModel::Serializer
  attributes :id, :score, :student, :assessment, :total

  def student
    self.object.student.full_name
  end

  def assessment
    self.object.assessment.name
  end

  def total
    self.object.assessment.total
  end
end
