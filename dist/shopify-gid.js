exports.decode=function(e){var t=("undefined"==typeof window?Buffer.from(e,"base64").toString("utf-8"):atob(e).split("shopify/")[1]).split("/");return{type:t[0],id:t[1]}},exports.encode=function(e,t){var o="gid://shopify/"+e+"/"+t;return"undefined"==typeof window?Buffer.from(o,"utf-8").toString("base64"):btoa(o)};
//# sourceMappingURL=shopify-gid.js.map
