const college = {
    name: "SIU",
    class: ["10", "11", "16"],
    events: ["science fair", "Bijoy dibosh"],
    spaciality:  {
        color: "blue",
        result:{
            gpa: 5,
        }
    }
}

college.events[1] = "16 December" // changing the value

// and if u want to delete a property from the object

delete college.class // class is delete from the object

console.log(college.spaciality.color)
console.log(college.spaciality.result.gpa)
console.log(college.events[1])
console.log(college)