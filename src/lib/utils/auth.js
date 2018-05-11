export function setLocalStorage(token){
  console.log('XXXXXXX')
  localStorage.setItem('tokensss', token);
};

export function getToken(){
    return localStorage.getItem('token');
}
