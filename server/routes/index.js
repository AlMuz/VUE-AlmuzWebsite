const path = require('path');

module.exports = function (app) {

  app.get('/', (req,res) => {
    res.json({data: []});
  })

  app.use((req, res) => { res.status(404).send({error:'404'}) })
}
