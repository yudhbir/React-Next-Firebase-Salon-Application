var CryptoJS = require("crypto-js");
const ency_key="Hexoctal123!@#"
// Encrypt
export function encrypt(msg){
    return CryptoJS.AES.encrypt(msg, ency_key).toString();
}

// Decrypt
export function decrypt(ciphertext){
    var bytes  = CryptoJS.AES.decrypt(ciphertext, ency_key);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export const ProtectRoute = ({ children }) => {
    if (typeof window !== 'undefined') { //localstorage only work after window load
        const is_authenticated = localStorage.getItem('is_authenticated');
        if ((!is_authenticated && window.location.pathname !== '/login')){
            return <Login />; 
        }
        if (is_authenticated) {
            const auth = JSON.parse(decrypt(is_authenticated));
            const validToken=auth.email;   
            return children;
        }
    }
  };