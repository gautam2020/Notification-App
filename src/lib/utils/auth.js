export function setLocalStorage(token){
  console.log('XXXXXXX')
  localStorage.setItem('tokensss', token);
//  localStorage.setItem('expirationTime', expirationTime)
};

export function getToken(){
    return localStorage.getItem('token');
}
