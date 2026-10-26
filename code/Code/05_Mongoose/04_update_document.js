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
  const updated = await Student.findOneAndUpdate(
    { name: "Daksha" },
    { $set: { marks: 95 } },
    { new: true, runValidators: true }
  );
  console.log(updated || "Student not found");
  await mongoose.disconnect();
}
main().catch((err) => { console.error(err); process.exitCode = 1; });
