const array2=[{id:101,name:"hanna",salary:20000},{id:102,name:"alna",salary:15000},{id:103,name:"shahala",salary:10000}]

function newarray2(req,res)
{
    const datasal=parseInt(req.params.salary)
    const salary=array2.find(val=>val.salary===datasal)
    console.log(salary);
    res.json(salary)

    const dataid=parseInt(req.params.id)
    const id=array2.find(val=>val.id===dataid)
    console.log(id);
    res.json(id)

    // const dataname=req.params.name
    // const name=array2.find(val=>val.name===dataname)
    // console.log(name);
    // res.json(name)
}

module.exports=newarray2