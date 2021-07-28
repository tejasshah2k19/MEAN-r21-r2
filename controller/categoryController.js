
//post 
exports.addCategory = function(req,res){
    console.log(req.body);   
    res.send({stat:200,data:"",msg:"done.."})
}