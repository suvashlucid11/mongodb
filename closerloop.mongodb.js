use("broadway")
//OPERATORS
//comparision operators
//name=="under the dome"
// db.movies.find({name:{$eq:"Under the Dome"}})
//? find the movie whose name is the  Bitten
// db.movies.find({name:{$eq:"Bitten"}})
//they are comparision opetaros
// db.movies.find({name:"Bitten"})//returns the same value as the eq
// db.movies.find({name:"Person of Interest"})
//? $gt;
//wt>=60
// db.movies.find({runtime:{$gt:60}}.count())??????????
//  db.movies.find({runtime:{$gte:90}})
// db.movies.find({weight:{$lt:75}});
//wt<75 
// db.movies.find({weight:{$lte:75}})

// db.movies.find({weight:{$gte:10}}).count()
//?$not
// status!=="Ended"
// db.movies.find({status:{$not:{$eq:"ended"}}})
// db.movies.find({status:{$not:{$eq:"Ended"}}})
// db.movies.find({status:{$not:{$ne:"Ended"}}})
//ne means the not equals to as well 
//==========//
//logical operator
//? $and,$or,$not,$nor 
//status==="Ended" && runtime===60
// db.movies.find({$and:[{status:"Ended"},{runtime:60},{"rating.average":9}]})//to store multiple condition we do array
// db.movies.find({"rating.average":{$lte:6}},{name:1,rating:1,_id:0})
//? $or
// db.movies.find()
//find thse movies whose run time is less than 60 or status is Ended
//runtime<60||status==="ended"
// db.movies.find({$or:[{runtime:{$lt:60}},{status:"ended"}]


// )
//find movies whoese status is neither ended nor run time is 60

// db.movies.find(
//     {
//         $nor: [
//             { status: "Ended" },
//             { runtime: 60 }
//         ]
//     },
//     {
//         name: 1,
//         rating: 1,
//         status: 1,
//         runtime:1 // Exclude the _id field if you don't want it in the output
//     }
// )
 
//find all movies 
// db.movies.find()

//find all movies 
// db.movies.find({ status: "Ended" })
//yesle chai end vako dekhaux  
//tala ko chai bich ko dekhaux 

// db.movies.find({
//     $and: [
//       { "rating.average": { $gt: 7 } },
//       { "rating.average": { $lt: 9 } }
//     ]
//   })
//tala ko shows the gereners only

// db.movies.find({ genres: "Thriller" })
//yesle shows which status is running

// db.movies.find({ status: "Running" })

//this code shows movies which has statues of ended and runtime 60
// db.movies.find({
//     $and: [
//       { status: "Ended" },
//       { runtime: 60 }
//     ]
//   })

// db.movies.find({
//     $and: [
//       { weight: 75 },
//       { "network.country.name": "Canada" }
//     ]
//   })
//   yesle chai shows ki which has the weight of 75 and also countrybname of canada

// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] })
//this shows either of weight 96 or runtime of 60

// db.movies.find({ "rating.average": { $ne: 9 } })
//  this shows rating of not of 9
