const router = require('express').Router();
const { post, comment, user } = require('../models/');

router.get('/', async (req, res) => {
    try {
        const postData = await post.findAll({
            include: [user],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render('all-posts', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});
// route.get('/profile', (req, res) => {
//     res.render("")
// })
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await post.findByPk(req.params.id, {
            include: [
                user,
                {
                    model: comment,
                    include: [user],
                },
            ]
        })
        if (postData) {
            const post = postData.get({ plain: true }); res.render('single-post', { post });
        } else {
            res.status(404).json();
        }
    } catch (err) {
        res.status(500).json(err);
    }

});
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
})
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});
module.exports = router;