class SubjectTeachersController < ApplicationController

    def teacher_subjects
        @teacher = Teacher.find_by(id: session[:teacher_id])
        if @teacher
            subjects = SubjectTeacher.where(teacher_id: @teacher.id)
            render json: subjects
        else
        render json: {errors: ["Please Log in as Teacher to view your subjects"]}, status: 401  
        end
    end
    
end
