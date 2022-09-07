const {join}=require('path')
const createPostPage=(req,res)=>{
res.sendFile(join(__dirname,'..','..','..','front-end','protected','createPost.html'))
}

module.exports=createPostPage;