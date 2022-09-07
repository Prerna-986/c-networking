class WebService
{
    getRequest = (url)=>fetch(url)
   
    postRequest = (url,data)=>{
        return fetch(url,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }

    postFormDataRequest = (url,data)=>{
        return fetch(url,{
            method : "POST",
            body : data
        })
    }
}

export default new WebService()