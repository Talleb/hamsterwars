const {Router} = require('express');
const {db} = require('../firebase');

let router = new Router();

router.get('/', async (req, res) => {
    try {
        let hamsters = [];
        let snapShot = await db.collection('hamsters').get();
        snapShot.forEach(doc => {
            hamsters.push(doc.data());
        })
        res.status(200).send(hamsters)
    } catch (err) {
        res.status(500)
        console.error(err)
    }
})




module.exports = router;