'use strict'
const finController = require("../controllers/finController");


module.exports = function (req, res) {
  
  return finController.findAll({sbu:req.params.sbu})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  // res.json({
  //   sbu: req.params.sbu,
  //   region:req.params.region,
  //   period:req.params.period
  // })
}
