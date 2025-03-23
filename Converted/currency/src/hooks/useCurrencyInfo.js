import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState("");
    //we want to call an API
    //we can also call the api directly using fetch but we want to use it only when someone uses this hooks

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;