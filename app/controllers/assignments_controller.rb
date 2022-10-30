class AssignmentsController < ApplicationController
# before_action :set_assignment, only: [:show, :edit, :update, :destroy]
def index
  assignments = Assignment.all
  render json: assignments
end

# SHOW
def show
    
  assignment = Assignment.find_by(id: params[:id])
  if assignment
      render json: assignment
  else
      render json: {error: "Assignment not found"}, status: :not_found
  end
end

#  CREATE
def create
  assignment = Assignment.create(assignment_params)
  render json: assignment,  status: :created
end
# DESTROY

def destroy
  assignment =Assignment.find_by(id: params[:id])

  if assignment 
    assignment.destroy
    head :no_content 
  else
   render json: {error: "Assignment not found"}, status: :not_found
  end

end
   private
   def assignment_params
    params.permit(:name, :subject_teacher_id, :due_date)
   end
end
