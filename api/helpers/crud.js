module.exports = {


  friendlyName: 'Crud',


  description: 'Crud something.',


  inputs: {
    no:{type:"number"}

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {

    console.log(inputs.no)
    console.log("helper")
    // TODO
  }


};

