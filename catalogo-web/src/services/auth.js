export const TOKEN = "@atag-Token";
export const Uid ="id";
export const Access = "key"
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;
export const getToken = () => localStorage.getItem(TOKEN);
export const getId = ()=>localStorage.getItem(Uid)
export const login = data => {
  
   localStorage.setItem(TOKEN, data.keys.token);
   localStorage.setItem(Uid,data.ids.id);
   localStorage.setItem(Access,data.ids.access);
  
};
export const logout = () => {
  localStorage.removeItem(TOKEN);
};