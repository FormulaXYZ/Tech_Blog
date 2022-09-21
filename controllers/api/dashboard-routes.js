const router = require('express').Router();
const {post} =require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth , async(req, res) => {
    
    try{
        const posts =  postData.map(post) => post.get ;
        