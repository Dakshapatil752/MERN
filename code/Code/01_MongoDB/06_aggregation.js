use mern_practice

// Average marks and student count per course
db.students.aggregate([
  {
    $group: {
      _id: "$course",
      averageMarks: { $avg: "$marks" },
      studentCount: { $sum: 1 }
    }
  },
  { $sort: { averageMarks: -1 } }
])
