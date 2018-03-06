function t(t){var f=("undefined"==typeof window?Buffer.from(t,"base64").toString("utf-8"):atob(t).split("shopify/")[1]).split("/");return{type:f[0],id:f[1]}}function f(t,f){var o="gid://shopify/"+t+"/"+f;return"undefined"==typeof window?Buffer.from(o,"utf-8").toString("base64"):btoa(o)}export{t as decode,f as encode};
//# sourceMappingURL=shopify-gid.es.js.map
