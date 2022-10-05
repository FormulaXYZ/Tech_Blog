
const { user, post, comment } = require('../models');

const userData = [

    {
        username: 'sammy',
        password: 'sammyxyz',
        email: 'sammy@gmail.com',
    },

    {
        username: 'jimmy',
        password: '123jimmy',
        email: 'jimmy@yahoo.com'
    },

    {
        username: 'robel',
        password: 'robel123',
        email: 'robel@gmail.com',
    },

    {
        username: 'boby',
        password: 'bobyinthehouse',
        email: 'bobyl@gmail.com',
    },
]
const postData = [

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

const commentData = [

    {
        content: 'I love the new movie',
        user_id: 1,
        post_id: 2

    },

    {
        content: 'what a nice day to be programer',
        user_id: 2,
        post_id: 1

    },
]
const plantSeeds = async () => { await user.bulkCreate(userData); await post.bulkCreate(postData); await comment.bulkCreate(commentData); }

plantSeeds();
