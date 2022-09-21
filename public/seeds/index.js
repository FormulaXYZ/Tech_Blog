
const{user,post,comment} = require('../models');

const  users = [

    {
        username:'sammy',
    password:'sammyxyz',
    },

    {
        username:'jimmy',
    password:'123jimmy',
    },

    {
        username:'robel',
    password:'robel123',
    },

    {
        username:'boby',
    password:'bobyinthehouse',
    },
]
const posts = [

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

const comments = [

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
const plantSeeds = async() => {await user.bulkCreate(users {individualHooks:true});await post.bulkCreate(posts);await comment.bulkCreate(comments);}

    plantSeeds();
