export function setCookie(cname, cvalue, exdays = 1000000000) {
  if (typeof window != "undefined") {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    window.document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}
// v old::
// export function setCookie(name, value, maxAgeInSeconds) {
//   const maxAge = maxAgeInSeconds ? `; max-age=${maxAgeInSeconds}` : "";
//   document.cookie = `${name}=${value || ""}${maxAge}; path=/`;
// }

// export function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// export function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie =
//     name + "=" + (value || "") + expires + "; path=/; domain=." + name;
// }
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
