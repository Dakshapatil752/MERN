const student = { name: "Daksha", skills: ["JavaScript", "React", "Node.js"] };

console.log("Name:", student.name);
student.skills.push("MongoDB");
student.skills.forEach((skill, index) => console.log(`${index + 1}. ${skill}`));
