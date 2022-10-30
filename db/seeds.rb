# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Admin.."
admin = Admin.create(username: "admin", email: "admin@gmail.com", role: "admin", password: "admin")

puts "Done Seeding Admin"



puts "Seeding Teachers.."
teacher1 = Teacher.create(username: "deno", email: "deno@gmail.com", role: "teacher", password: "deno")
teacher2 = Teacher.create(username: "mburu", email: "mburu@gmail.com", role: "teacher", password: "mburu")
teacher3 = Teacher.create(username: "bob", email: "bob@gmail.com", role: "teacher", password: "bob")

puts "Done Seeding Teachers"


puts "Seeding Students.."
student1 = Student.create(username: "ali", email: "ali@gmail.com", role: "student", password: "ali")
student2 = Student.create(username: "mariam", email: "mariam@gmail.com", role: "student", password: "mariam")
student3 = Student.create(username: "siti", email: "siti@gmail.com", role: "student", password: "student")

puts "Done Seeding Students"



puts "Seeding Parents.."
parent1 = Parent.create(username: "jon", email: "jon@gmail.com", role: "parent", password: "jon")
parent2 = Parent.create(username: "okech", email: "okech@gmail.com", role: "parent", password: "okech")
parent3 = Parent.create(username: "tim", email: "tim@gmail.com", role: "parent", password: "parent")

puts "Done Seeding Parents.."


puts "Completed All Seeding"





