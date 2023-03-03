import React from "react";
import KhaltiSecret from "./khaltiSecret";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

const KhaltiBox = () => {
    const checkout = new KhaltiCheckout(config);

    const Pay = () => {
        checkout.show({ amount: 1000 });
    };

    return (
        <div className="flex flex-col items-center">
            <h4 className="m-10">Hello Noobie!</h4>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => Pay()}
            >
                Pay
            </button>
        </div>
    );
};

export default KhaltiBox;
