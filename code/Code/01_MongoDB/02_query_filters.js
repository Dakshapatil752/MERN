use mern_practice

// Exact match
db.students.find({ course: "Computer Science" })

// Comparison operators
db.students.find({ marks: { $gte: 80 } })

// AND condition
db.students.find({ course: "Computer Science", marks: { $gte: 80 } })
