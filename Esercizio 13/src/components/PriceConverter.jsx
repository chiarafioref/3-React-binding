import { useState } from "react";

function PriceConverter() {
    const [currency, setCurrency] = useState("euro");
    const price = 100;
    const values = {
        euro: { price: price, symbol: "€" },
        dollaro: { price: price * 1.14, symbol: "$" },
        sterlina: { price: price * 0.70, symbol: "£" },
        yen: { price: price * 165, symbol: "¥" }
    };
    return (
        <>
            <div>
                <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    <option value="euro">Euro</option>
                    <option value="dollaro">Dolaro</option>
                    <option value="sterlina">Sterlina</option>
                    <option value="yen">Yen</option>
                </select>
            </div>
            <h1>{values[currency].price.toFixed(2)} {values[currency].symbol}</h1>


        </>
    )
};

export default PriceConverter;