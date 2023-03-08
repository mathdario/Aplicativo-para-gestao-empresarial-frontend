import { firstName } from "../utils/nameUtils";  


export function setStorage(userAuth) {
  const { token, user } = userAuth;
  
  let userName = firstName(user.name);
  
  localStorage.setItem("name", userName);
  localStorage.setItem("token", token);
}

export function getStorage(field) {
  return localStorage.getItem(field);
}

export function deleteStorage() {
  localStorage.clear();
}

export function getToken() {
  const token = {
    headers: { Authorization: `Bearer ${getStorage("token")}` },
  };
  return token;
}