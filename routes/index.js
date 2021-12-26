var express = require('express');
const axios = require('axios').default;
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {   
    res.render('index', {title: 'Hello mn'});
});

router.get('/testapi', (req, res) => {
 res.render('index', {title: 'Hello mn'});
})

module.exports = router;
