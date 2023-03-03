import KhaltiCheckout from "khalti-web";

let config = {
    publicKey: "test_public_key_0891b2b38bda4f4e9f4366e96996bbc4",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
        onSuccess(payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError(error) {
            // handle errors
            console.log(error);
        },
    },
    // one can set the order of payment options and also the payment options based on the order and items in the array
    paymentPreference: ["MOBILE_BANKING", "KHALTI", "EBANKING"],
};

let checkout = new KhaltiCheckout(config);
let btn = document.getElementById("payment-button");
btn.onclick = function () {
    checkout.show({ amount: 1000 });
};

export default btn;
