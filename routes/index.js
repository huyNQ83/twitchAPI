var express = require('express');
const axios = require('axios').default;
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let dataset = [];
  

  try {
    // const promises = channels.map(async (channel) => {
    //   const { data } = await axios.get(`https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${channel}`);
    //   return data;
    // })
    // console.log("🚀 ~ file: index.js ~ line 16 ~ promises ~ promises", promises)
      

    // dataset = await Promise.all(promises);

    // for (const channel of channels) {
    //   const { data } = await axios.get(`https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${channel}`);
    //   dataset.push(data);
    // }

    
    res.render('index', {title: 'Hello mn'});
    // res.send(dataset);
  } catch (error) {
    console.log(error)
  }   
});

router.get('/testapi', (req, res) => {
 res.render('index', {title: 'Hello mn'});
})

module.exports = router;
