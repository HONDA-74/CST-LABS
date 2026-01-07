function getCookie(name) {
  if (!name) throw new Error("Cookie name is required");

  if (typeof name !== "string") throw new Error("Cookie name must be a string");

  if (arguments.length !== 1)
    throw new Error("getCookie only accepts one argument");

  let cookies = document.cookie.split(";");
  let cookie = {};

  for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    cookie[parts[0].trim()] = parts[1];
  }

  return cookie[name];
}

function setCookie(name, value, expires = "") {
  if (!name || !value) throw new Error("Cookie name and value are required");

  if (arguments.length > 3)
    throw new Error("setCookie only accepts three arguments");

  if (typeof name !== "string" || typeof value !== "string")
    throw new Error(
      "Cookie name and value must be strings and expires must be a Date object"
    );

  if (expires && !(expires instanceof Date))
    throw new Error("expires must be a Date object");

  document.cookie = name + "=" + value + ";expires=" + expires;
}

function deleteCookie(name) {
  if (!name) throw new Error("Cookie name is required");
  if (typeof name !== "string") throw new Error("Cookie name must be a string");
  if (arguments.length > 1)
    throw new Error("deleteCookie only accepts one argument");

  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function listCookies() {
  if (arguments.length > 0)
    throw new Error("listCookies does not accept any arguments");

  let cookies = document.cookie.split(";");
  let cookieList = {};
  for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    cookieList[parts[0].trim()] = parts[1];
  }
  return cookieList;
}

function hasCookie(name) {
  if (!name) throw new Error("Cookie name is required");
  if (typeof name !== "string") throw new Error("Cookie name must be a string");
  if (arguments.length !== 1)
    throw new Error("hasCookie only accepts one argument");

  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    if (parts[0].trim() === name) return true;
  }
  return false;
}
