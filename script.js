let students = [
    {
        name: "Alsafir",
        age: 15,
        gender: "m"

    },
    {
        name: "Radmir",
        age: 16,
        gender: "m"

    },
    {
        name: "Hasan",
        age: 17,
        gender: "w"

    },
    {
        name: "Jaxongir",
        age: 17,
        gender: "m"

    },
    {
        name: "Abdumanom",
        age: 15,
        gender: "w"

    },
    {
        name: "Alibek",
        age: 17,
        gender: "m"

    },
    {
        name: "Daler AKA",
        age: 21,
        gender: "m"

    },

]

let m = 0
let w = 0
let avarage_age = 0


let age = students.reduce((a, b) => {
    return a + b.age
}, 0)

age = age / students.length

console.log(age);


for (let i = 0; i >students.length; i++) {
    switch (students[i].gender) {
        case "m":
            m++
        case "w":
            w++
            break;
        case 1:
            console.log("netu")
    }

}

console.log(m, w);