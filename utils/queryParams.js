export const queryParams = (params) => {

  if (typeof params !== 'object') {
    console.error("[queryParams] The parameter must be an object.");
    return;
  }

  let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return queryString;
  
}