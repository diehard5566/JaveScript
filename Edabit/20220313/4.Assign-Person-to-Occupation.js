// You have two arrays. One shows the names of the people names, 
// while the other shows their occupation jobs. 
// Your task is to create an object displaying each person to their respective occupation.

// Names	Jobs
// Annie	Teacher
// Steven	Engineer
// Lisa	Doctor
// Osman	Cashier

const assignPersonToJob = (names, jobs) => {
    let r = {}
    names.forEach((name, job) => r[name] = jobs[job]);
    return r
}

const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

console.log(assignPersonToJob(names, jobs));
//   {
//   Dennis: "Butcher",
//   Vera: "Programmer",
//   Mabel: "Doctor",
//   Annette: "Teacher",
//   Sussan: "Lecturer"
// }