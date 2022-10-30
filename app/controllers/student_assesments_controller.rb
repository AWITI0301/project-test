class StudentAssesmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found


    def index
        render json: StudentAssesment.all
    end

    def show
        student_assessment = StudentAssesment.find(params[:id])
        render json: student_assessment
    end

    def par_stu_assesments
        student_assesments = StudentAssesment.where(student_id: params[:id])
        render json: student_assesments
    end

    def render_record_not_found
        render json: {error: "Student Assessment not found"}, status: 404
    end

end
