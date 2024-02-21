function samplearray2(req,res)
{
    const {id,name,rank,intrests,place}=req.body
    console.log(id,name,rank,intrests,place);
    res.json({id,name,rank,intrests,place})
}

module.exports=samplearray2