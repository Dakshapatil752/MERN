use mern_practice

db.students.updateOne(
  { name: "Daksha" },
  { $set: { marks: 95, status: "Active" } }
)

db.students.find({ name: "Daksha" })
