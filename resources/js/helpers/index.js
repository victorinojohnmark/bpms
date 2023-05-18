import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

class HttpError extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
    }
}

class ApiClient {
    constructor() {
        const authStore = useAuthStore()

        this.token = authStore.token; // get token from useAuthStore
        this.headersList = {
            // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": this.token ? `Bearer ${this.token}` : null
           }
    }

    // async get(endpoint) {
    //     const response = await fetch(endpoint, { 
    //         method: "GET",
    //         body: data,
    //         headers: this.headersList
    //     });

    //     if (!response.ok) {
    //         const errorMessage = await response.json();
    //         throw new Error(errorMessage.message);
    //     }

    //     return response.json()
    // }

    // async post(endpoint, data){
    //     console.log("POST REQUEST: ", endpoint, this.headersList)

    //     const response = await fetch(endpoint, { 
    //         method: "POST",
    //         body: data,
    //         headers: this.headersList
    //     });

    //     console.log("POST REQUEST: ", endpoint, this.headersList)

    //     if (!response.ok) {
    //         const errorMessage = await response.json();
    //         throw new Error(errorMessage.message);
    //     }

    //     return response.json()
    // }

    // async put(endpoint, data) {
    //     const response = await fetch(endpoint, { 
    //         method: "PUT",
    //         body: data,
    //         headers: this.headersList
    //     });

    //     if (!response.ok) {
    //         const errorMessage = await response.json();
    //         throw new Error(errorMessage.message);
    //     }

    //     return response.json()
    // }

    // async patch(endpoint, data) {
    //     const response = await fetch(endpoint, { 
    //         method: "PATCH",
    //         body: data,
    //         headers: this.headersList
    //     });

    //     if (!response.ok) {
    //         const errorMessage = await response.json();
    //         throw new Error(errorMessage.message);
    //     }

    //     return response.json()
    // }

    // async delete(endpoint) {
    //     // const response = await fetch(endpoint, {
    //     //     method: 'DELETE',
    //     // })

    //     // return await response.json()

    //     const response = await fetch(endpoint, { 
    //         method: "POST",
    //         body: data,
    //         headers: this.headersList
    //     });

    //     if (!response.ok) {
    //         const errorMessage = await response.json();
    //         throw new Error(errorMessage.message);
    //     }

    //     return response.json()
    // }

    async request(endpoint, requestType, data = null) {
        const response = await fetch(endpoint, { 
            method: requestType,
            body: data,
            headers: this.headersList
        });

        console.log(`${requestType} REQUEST:`, endpoint, this.headersList)

        if (!response.ok) {
            const errorMessage = await response.json();
            throw new Error(errorMessage.message);
        }

        return response.json()
    }




}

export {HttpError, ApiClient}