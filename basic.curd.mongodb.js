// use("broadway")

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
// db.courses.deleteMany({})
// db.courses.find()
//?update
//? updateOne,updateMany
// db.courses.findOne({name:"django"});
//returned the null 
//otherwise returns an array empty... 
// db.courses.find()
// db.courses.updateOne({name:"c++"},{$set:{
//     price:50000
// }})

// db.courses.find()
//now updateMany
// db.courses.updateMany({name:"c++"},{

//     $set:{
//         duration:120,
//     },
// })
// db.courses.find()
//name price quantity ko assignment


// db.sports.insertOne({
//     sport: "football",
//     players: 22,
//     popular: true
// })
// db.sports.insertMany([
//     {
//         sport: "basketball",
//         players: 10,
//         popular: true
//     },
//     {
//         sport: "tennis",
//         players: 2,
//         popular: true
//     },
//     {
//         sport: "golf",
//         players: 1,
//         popular: true
//     }
// ])

// db.sports.insertOne({
//     name: "soccer",
//     price: 50,
//     quantity: 100
// })

// db.sports.insertMany([
//     {
//         name: "basketball",
//         price: 40,
//         quantity: 80
//     },
//     {
//         name: "tennis",
//         price: 30,
//         quantity: 50
//     },
//     {
//         name: "golf",
//         price: 70,
//         quantity: 120
//     }
// ])

// Find all documents in the 'sports' collection
// db.sports.find()

 
// db.sports.find({ name: "soccer" })

 
// db.sports.findOne({ name: "tennis" })

// Delete a single document
// db.sports.deleteOne({ name: "golf" })

// Delete all documents in the 'sports' collection
// db.sports.deleteMany({})
// Update a single document
// db.sports.updateOne({ name: "basketball" }, {
//     $set: {
//         price: 45
//     }
// })

// Update multiple documents
// db.sports.updateMany({ price: { $gt: 50 } }, {
//     $inc: {
//         quantity: 10
//     }
// })
// db.sports.find()
// db.sports.updateOne({"name":"tennis"},{$set:{
//     "quantity":110
// }})


// db.movies.find()
