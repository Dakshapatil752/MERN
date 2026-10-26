use mern_practice

// Delete one matching document
db.students.deleteOne({ name: "Temporary Student" })

// Delete all documents matching a filter
db.students.deleteMany({ status: "Archived" })
