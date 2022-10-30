Rails.application.routes.draw do
  resources :parents
  resources :students
  resources :teachers
  resources :admins
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


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
