module.exports = rawRequest => {

  const [parsedMethod, parsedPath] = rawRequest.split(' ');

  const [, parsedBody] = rawRequest.split('\r\n\r\n');

  console.log(parsedMethod, parsedPath, parsedBody);

  //return an object with body, method, and path from the rawRequest
  if(parsedBody) {
    return {
      method: parsedMethod, 
      path: parsedPath, 
      body: parsedBody
    };
   
  } else {
    return {
      method: parsedMethod, 
      path: parsedPath  
    };
  } 

};
