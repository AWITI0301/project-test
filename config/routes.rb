Rails.application.routes.draw do
  resources :subject_teachers
  resources :student_assesments
  resources :student_assignments
  resources :users, only: [:index, :show, :update, :create]
  resources :admins, only: [:index, :show, :update, :create]
  resources :assignments, only: [:index, :show, :update, :create]
  resources :assessments, only: [:index, :show, :update, :create]
  resources :classrooms, only: [:index, :show, :update, :create]
  resources :subjects, only: [:index, :show, :update, :create]
  resources :teachers, only: [:index, :show, :update, :create]
  resources :parents, only: [:index, :show, :update, :create]
  resources :students, only: [:index, :show, :update, :create]
  # resources :assignments
  # resources :assessments
  # resources :classrooms, only: [:index, :show]
  # resources :subjects, only: [:index, :show]
  # resources :teachers
  # resources :parents
  # resources :students
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  #   GET A PARENT'S STUDENT
  get "/student_parent", to: "students#student_parent"

  # GET A PARENT'S STUDENT ASSESSMENTS
  get "/par_stu_assesments/:id", to: "student_assesments#par_stu_assesments"

  # GET A PARENT'S STUDENT ASSIGNMENTS
  get "par_stu_assignments/:id", to: "student_assignments#par_stu_assignments"
  
  # GET A TEACHER'S SUBJECTS
  get "teacher_subjects", to: "subject_teachers#teacher_subjects"
  
    # ADMIN AUTH
    post "/admin_login", to: "admin_sessions#create"
    delete "/admin_logout", to: "admin_sessions#destroy"
    get "/admin_auth", to: "persistence#admin"
    
  
    #TEACHER AUTH
    post "/teacher_login", to: "teacher_sessions#create"
    delete "/teacher_logout", to: "teacher_sessions#destroy"
    get "/teacher_auth", to: "persistence#teacher"
  
  
    #STUDENT AUTH
    post "/student_login", to: "student_sessions#create"
    delete "/student_logout", to: "student_sessions#destroy"
    get "/student_auth", to: "persistence#student"
  
  
    #PARENT AUTH
    post "/parent_login", to: "parent_sessions#create"
    delete "/parent_logout", to: "parent_sessions#destroy"
    get "/parent_auth", to: "persistence#parent"
    
end