function getSessionStorage(name: string) {
  const data = sessionStorage.getItem(name);
  if(!data) {
      return;
  }
  return JSON.parse(data);
}

function setSessionStorage(name: string = '', data: {} | string = '') {
  if(!name) {
      return;
  }
  sessionStorage.setItem(name, JSON.stringify(data));
}

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}

export { 
  getSessionStorage, 
  setSessionStorage, 
  clearStorage 
};