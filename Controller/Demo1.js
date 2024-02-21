function demo1(req,res)
{
    const {id,firstname,middlename,lastname,designation,age,place,adderess}=req.body;
    console.log(id,firstname,middlename,lastname,designation,age,place,adderess);
    res.json({id,firstname,middlename,lastname,designation,age,place,adderess})

}

module.exports=demo1