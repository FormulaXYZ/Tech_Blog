
const { user, post, comment } = require('../models');

const user = [

    {
        username: 'sammy',
        password: 'sammyxyz',
    },

    {
        username: 'jimmy',
        password: '123jimmy',
    },

    {
        username: 'robel',
        password: 'robel123',
    },

    {
        username: 'boby',
        password: 'bobyinthehouse',
    },
]
const post = [

    {
        title: 'I like to move it move it',
        content: 'moving is good',
        user_id: 1
    },
    {
        title: 'making our world better',
        content: 'how to cahnge the world to make it better',
        user_id: 2
    },
    {
        title: 'vaction',
        content: 'picking greater vaction spot',
        user_id: 3
    },
    {
        title: 'home made furniture',
        content: 'very easy ways to make great furnitures',
        user_id: 4
    },

]

const comment = [

    {
        Comment: 'I love the new movie',
        user_id: 1,
        post_id: 2

    },

    {
        Comment: 'what a nice day to be programer',
        user_id: 2,
        post_id: 1

    },
]
const plantSeeds = async () => { await user.bulkCreate(user); await post.bulkCreate(post); await comment.bulkCreate(comment); }

plantSeeds();
