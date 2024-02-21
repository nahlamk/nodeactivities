const array3=[{id:1,name:"ameera",age:24,qualification:"mbbs",place:"malappuram"},
              {id:2,name:"eva",age:22,qualification:"CA",place:"calicut"},
               {id:3,name:"ilan",age:21,qualification:"MBA",place:"calicut"}   ]

 function newarray3(req,res)
 {
    // const dataplace=req.params.place
    // const place=array3.filter(val=>val.place===dataplace)
    // console.log(place);
    // res.json(place)

    const dataquali=req.params.qualification
    const qualification=array3.find(val=>val.qualification===dataquali)
    console.log(qualification);
    res.json(qualification)
 }  
 
 
 module.exports=newarray3