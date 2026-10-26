// Create/select database and collection
use mern_practice

db.students.insertOne({
  name: "Daksha",
  course: "Computer Science",
  marks: 90
})

db.students.find()
