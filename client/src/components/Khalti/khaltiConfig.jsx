import KhaltiCheckout from "khalti-checkout-web";
import KhaltiSecret from "./khaltiSecret";

let config = {
    publicKey: KhaltiSecret.PUBLIC_KEY,
    productIdentity: "1234",
    productName: "Computer",
    productUrl: "http://localhost:3000/products/computer",
    eventHandler: {
        onSuccess(payload) {
            console.log(payload);
        },
        onError(error) {
            console.log(error);
        },
    },
    paymentPreference: ["MOBILE_BANKING", "KHALTI", "EBANKING"],
};

export default config;
