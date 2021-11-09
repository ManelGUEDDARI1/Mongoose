const mongoose=require ('mongoose')
const Schema=mongoose.Schema
const personSchema=new Schema ({
   // Create a person with this prototype:
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    favoriteFoods :{
        type:[String]
    }
})
module.exports=mongoose.model('person',personSchema)