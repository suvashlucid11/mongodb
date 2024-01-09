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
db.movies.find({$and:[{status:"Ended"},{runtime:60},{"rating.average":9}]})//to store multiple condition we do array
