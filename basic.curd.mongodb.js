use("broadway")

// db.broadway.insertOne({

//     name:"suvash",
//     college:"mbm",
//     address:{
//         temporary:"syangja",
//         permanent:"ktm,"
//     },
// })


// db.broadway.find()
// db.students.insertOne({name:"bicek",
// colelge:"null",
// address:{

// temporary:"lokanthali",
// permanent:"syangja"

// }})


// db.students.find()


//how to insert many data at once?


// db.courses.insertMany([{
//     name:"mERN",
//     price:200,
//     duration:100,

// },

// {
//     name:"c",
//     price:2300,
//     duration:34,

// },
// {
//     name:"c++",
//     price:344,
//     duration:343,

// }
// ])
// db.courses.find()

//Read operation 
//find always returns the array
//always returns the  one element based on the provided condition
// db.courses.find({name:"c++"})
//name==="c++"
//findone returns the object
//find reurns an array
//findone returns first object 
//?Delete
//delete One,deleteMany
// db.courses.deleteOne({duration:343})
// db.courses.find();
db.courses.deleteMany({})