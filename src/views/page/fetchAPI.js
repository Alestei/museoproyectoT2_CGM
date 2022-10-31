async function getApiInfo(api){
  let query = await fetch(api);
  let result = query.json();
  return result
}
//

async function postApiInfo(api,data){
  
   const response = await fetch(api, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

    let queryStatus = response.json();
    return queryStatus

}

//
async function deleteApiInfo(api){
  const response = await fetch(api, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });

    let queryStatus = response.json();
    return queryStatus
}
//
async function putApiInfo(api,data){
  
  const response = await fetch(api, {
   method: 'PUT', // *GET, POST, PUT, DELETE, etc.
   mode: 'cors', // no-cors, *cors, same-origin
   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
   credentials: 'same-origin', // include, *same-origin, omit
   headers: {
     'Content-Type': 'application/json'
   },
   //redirect: 'follow', // manual, *follow, error
   //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   body: JSON.stringify(data) // body data type must match "Content-Type" header
 });

   let queryStatus = response.json();
   return queryStatus

}