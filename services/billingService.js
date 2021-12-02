import axios from "axios";


export async function getBilling(user, checkout, type, session) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': session.user.token
    }
    const bill = {
        "id": 1,
        "cardId": "28564066",
        "cuit": user.cuit,
        "billType": type,
        "puntoDeVenta" : 1,
        "comments" : "Comentarios ...",
        "checkoutId": checkout.id
    }
    const fetchUrl = `http://localhost:8888/eComm/billing`;


    try {
        let response = await axios.post(fetchUrl, bill, {
            headers: headers
        });
        return response;
    } catch (error) {
        console.log("error", error.response.data);
        return error.response;
    }
}


export async function getBills() {
    const fetchUrl = `http://localhost:8888/eComm/billing`;
    const fetchOptions = {
        endpoint: fetchUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };
    try {
        const data = await fetch(fetchUrl, fetchOptions)
            .then((response) => response.json())
            .catch(error => console.log(error));
        return data;
    } catch (error) {
        throw new Error("Could not fetch bills!");
    }
}

export async function getBillsById(id) {
    const fetchUrl = `http://localhost:8888/eComm/billing/` + id;
    const fetchOptions = {
        endpoint: fetchUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };
    try {
        const data = await fetch(fetchUrl, fetchOptions)
            .then((response) => response.json())
            .catch(error => console.log(error));
        return data;
    } catch (error) {
        throw new Error("Could not fetch a bill!");
    }
}

