const Game = require('../models/game.model');
const router = require('express').Router();

router.route('/').post((req, res) => {
    const{title, system, release_date, status, yr_completed} = req.body;
    const newGame = new Game({title, system, release_date, status, yr_completed});
    newGame.save().then(game => {
        res.status(200).json({title: game.title});
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})

router.route('/').get((req, res) => {
    Game.find({})
    .then(games => {
        res.json(games)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;