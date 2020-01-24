const request=require('request')


const geocode = (address,callback) =>{
    const wurl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibXVydGF6YTExMTIiLCJhIjoiY2s1Y2h1bzd4MDlmazNqbzlsMG53b3ZscyJ9.44HcOX-6XTy-hg_QIcDGRw&limit=1"
    
    request({url:wurl,json:true},(error,response)=>{
        if(error)
            {
                callback("Sorry no internet")
            }else if(response.body.message)
            {
                callback("APIKEY invalid")
            }else if(response.body.features.lenght === 0 )
            {
                callback("Entered invalid Input")
            }else{    
                const data=response.body.features[0]
                callback(undefined,{
                    longitude: data.center[0],
                    latitude: data.center[1],
                  place_name: data.place_name
                })
            }  
})
}

module.exports=geocode