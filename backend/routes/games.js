const Game = require('../models/game.model');
const router = require('express').Router();

//Create
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

/*
//Get all
router.route('/').get((req, res) => {
    Game.find().sort({yr_completed: 1, status: 1, system: 1, title: 1})
    .then(games => {
        res.json(games)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})
*/

//Get w/ query
router.route('/').get((req, res) => {
    const{title, system, release_date, status, yr_completed} = req.query;
    let query = {}

    if(title) {
        query.title = title;
    }
    if(system) {
        query.system = system;
    }
    if(release_date) {
        query.release_date = release_date;
    }
    if(status) {
        query.status = status;
    }
    if(yr_completed) {
        query.yr_completed = yr_completed;
    }

    let found = Game.find(query);
    found.sort({yr_completed: 1, status: 1, system: 1, title: 1});

    found.then(result => {
        return res.status(200).json(result)
    })
    .catch(err=> {
        return res.status(400).json(err)
    })
})


//Update
router.route('/:id').put((req, res) => {
    Game.findById(req.params.id)
    .then(game=> {
        if(!game) {
            return res.status(400).json({error: "Bad Request"});
        }
        game.title = req.body.title;
        game.system = req.body.system;
        game.release_date = req.body.release_date;
        game.status = req.body.status;
        game.yr_completed = req.body.yr_completed;
        game.save()
        .then(() => res.status(200).json({message: 'Updated'}))
        .catch(err => res.status(400).json({error: "Bad Request"}))
    })
    .catch(err => res.status(400).json({error: "Bad Request"}))
})


module.exports = router;