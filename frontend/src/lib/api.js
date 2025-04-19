import axios from "axios";

export default async function analyzeFile(file){
    const formData = new FormData();
    formData.append('file', file);

    const API_URL = import.meta.env.VITE_BACKEND_API;
    //console.log(API_URL);
    const response = await axios.post(`${API_URL}/playground/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    const label = response.data.label;
    const confidence = response.data.confidence;
    return {label, confidence};
}
