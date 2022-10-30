class AssessmentsController < ApplicationController
    # before_action :set_grade, only: [:show, :edit, :update, :destroy]

    def index
      assesments = Assessment.all
      render json: assesments
    end
    
    # SHOW
    def show
        
      assesment = Assessment.find_by(id: params[:id])
      if assesment
          render json: assesment
      else
          render json: {error: "Assessment not found"}, status: :not_found
      end
    end
    
    #  CREATE
    def create
      assesment = Assessment.create(assesment_params)
      render json: assesment,  status: :created
    end
    # DESTROY
    
    def destroy
      assesment =Assessment.find_by(id: params[:id])
    
      if assesment 
        assesment.destroy
        head :no_content 
      else
       render json: {error: "Assessment not found"}, status: :not_found
      end
    
    end
       private
       def assesment_params
        params.permit(:name, :subject_teacher_id, :total)
       end
end
