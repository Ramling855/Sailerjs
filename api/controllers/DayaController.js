/**
 * DayaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Daya = require("../models/Daya")

// const Daya = require("../models/Daya")

module.exports = {
  data : async function (req,res){
    // console.log(req.body.name)
    let user =await Daya.create({
name:req.body.name
    })
    // user.save().then(()=>console.log("data saved"))
    return res.ok()
  },
  getData:async(req,res)=>{
let alldata= await Daya.find()
res.send(alldata)
},
updateData:async(req,res)=>{
   let id=req.params.id
   console.log(req.body)
    console.log(req.params.id)
let Allupdate=await Daya.updateOne({id:id}).set({name:req.body.name})
res.send(Allupdate)
},
deleteData: async(req,res)=>{
    let id=req.params.id
    let deleteall=await Daya.destroyOne({id:id})

    res.send(deleteall)
console.log(req.params.id)

}




  }


