const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//if property and property value have the same name then can use only name in onject.
//example- const ans ={
//   name:name
//}can be replaced by 
//{name})(name already defined before)
//can also access certain propertites of an object without explicity declaring variable and assinging by method
//const {body} = response
//body.feature instead of response.body.feature

geocode(process.argv[2],(error,{latitude,longitude})=>{
    
    if(error)
    {return console.log("Error:",error)}
    console.log("data:",latitude,longitude)
    forecast(latitude,longitude,(error1,response)=>{
        if(error)
    {return console.log("Error:",error1)}
        console.log("data:",response)

    })

})


// const forecast1 = (longitude,latitude,callback) =>{
//     const url="https://api.darksky.net/forecast/1f58ebf64883d364129319fe3f028ca9/" + longitude + "," + latitude
    
//     request({url:url,json:true},(error,response)=>{
//         console.log("in request")
//         if(error)
//             {
//                 console.log("Sorry no internet")
//             }else if(response.body.error)
//             {
//                 console.log("Entered invalid Input")
//             }else{    
//                 const data=response.body.currently
//                 console.log({
//                     summary:data.summary,
//                     temperature: data.temperature,
//                     humidity:data.humidity,
//                     timezone:response.body.timezone
//                 })
//             }  
//          console.log("request ended")   
// })

// console.log("the function  has ran completely")
// }


// console.log(forecast1(12,23));
