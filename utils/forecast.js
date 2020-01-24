const request=require('request')

const forecast = (longitude,latitude,callback) =>{
    const url="https://api.darksky.net/forecast/1f58ebf64883d364129319fe3f028ca9/" + longitude + "," + latitude
    
    request({url:url,json:true},(error,response)=>{
        if(error)
            {
                callback("Sorry no internet")
            }else if(response.body.error)
            {
                callback("Entered invalid Input")
            }else{    
                const data=response.body.currently
                callback(undefined,{
                    summary:data.summary,
                    temperature: data.temperature,
                    humidity:data.humidity,
                    timezone:response.body.timezone
                })
            }  
})
}

module.exports=forecast