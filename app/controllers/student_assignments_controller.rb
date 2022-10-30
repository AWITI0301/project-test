class StudentAssignmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found


    def index
        render json: StudentAssignment.all
    end

    def show
        student_assignment = StudentAssesment.find(params[:id])
        render json: student_assignment
    end

    def par_stu_assignments
        student_assignments = StudentAssignment.where(student_id: params[:id])
        render json: student_assignments
    end

    def render_record_not_found
        render json: {error: "Student Assignment not found"}, status: 404
    end

end
