require("dotenv").config();
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  course: { type: String, required: true },
  marks: { type: Number, min: 0, max: 100, default: 0 }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

async function connect() {
  await mongoose.connect(process.env.MONGODB_URI);
}

async function main() {
  await connect();
  const student = await Student.create({ name: "Daksha", course: "CS", marks: 90 });
  console.log(student);
  await mongoose.disconnect();
}
main().catch((err) => { console.error(err); process.exitCode = 1; });
