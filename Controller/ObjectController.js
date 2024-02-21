function object(req,res)
{
    const obj={name:"nahla",place:"calicut"}
    console.log(obj);
    res.send(obj)
}

module.exports=object