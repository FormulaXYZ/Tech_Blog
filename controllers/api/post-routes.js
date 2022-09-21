const router = require('express').Router();
const {post} =require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth , async(req, res) => {
    const body = req.body;
    try{
        const newPost = await post.create({...body,userId:req.session.userId});
        res.json(newPost);}
    catch(err) {res.status(500).json(err);
}

});
router.put('/:id', withAuth,async (req, res) =>{
    try{
        const[affectedRows] = await post.update(req.body, {
            where:{
                id:req.params.id
            },
                    } );
       if(affectedRows >0){
        res.status(200).end();
       }else{
        res.status(404).end();
       }catch(err){
        res.status(500).json(err);
       }
    });
    router.delete('/:id', withAuth, async(req, res) => {
        try{
            const[affectedRows] = post.destroy({
                where:{
                    id:req.params.id',
                },
            });

        if(affectedRows >0){
            res.status(200).end();
        }else{
            res.status(404).end();
        }
    }catch(err){
            res.status(500).json(err);
        }
        });

        module.exports = router;
