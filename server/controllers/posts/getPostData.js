const {getPostDataQuery} = require('../../database/queries');
const getPostData = (req, res)=>{
    console.log('in get contriller')
    const {id} = req.params;
    console.log(id)
    getPostDataQuery(id)
    .then((postData)=>res.json(postData))
    .catch(console.log);
}
module.exports = getPostData;