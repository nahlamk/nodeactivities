const array1=[{id:1,name:"najiya",age:25},{id:2,name:"noushi",age:23},{id:3,name:"sabna",age:25}]
 
function newarray(req,res) 
{

    const datage=parseInt(req.params.age)
    const age=array1.filter(val=>val.age===datage)
    console.log(age);
    res.json(age)
}

module.exports=newarray