use mern_practice

// Show only name and marks; hide MongoDB _id
db.students.find({}, { name: 1, marks: 1, _id: 0 })
  .sort({ marks: -1 })
  .limit(5)
