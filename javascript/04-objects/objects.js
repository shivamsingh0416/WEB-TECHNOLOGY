const student = {
  name: "Riya",
  marks: 90,
  greet() {
    console.log("Hello, main " + this.name + " hu");
  },
};

student.greet();
console.log(student.marks);
