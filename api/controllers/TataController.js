/**
 * TataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Tata = require("../models/Tata");

// const Tata = require("../models/Tata");

module.exports = {
  tataGet:async(req,res)=>{
   let tataallpost=await Tata.create({
      data:req.body.data,
      sname:req.body.sname,
      login:req.body.login
    })
    console.log(req.body)
    res.send("tataallpost")

  },
  tataAlldata:async(req,res)=>{
    let no=10
    let helperdata=await sails.helpers.crud.with({no:no})
    console.log(helperdata,"helperdata")
let all=await Tata.find()
res.send(all)
  },
  tatUpdatedata:async(req,res)=>{
    let id=req.params.id
    console.log(id)
    console.log(req.body)
    let updateddata=await Tata.updateOne({id:id}).set({data:req.body.data,
        sname:req.body.sname,
        login:req.body.login})
        res.send(updateddata)
  },
  tatDeleteAlldata:async(req,res)=>{
let id=req.params.id
let dateDelete=await Tata.destroyOne({id:id})
res.send("data deleted")
  }

};

