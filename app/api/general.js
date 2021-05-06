import apiBaseURL from "./apiBaseUrl";

const sendForm = (names, lastName, birthdate, image, location) => 

    apiBaseURL.post("/registration", {
        name: names,
        lastName: lastName,
        birthdate: birthdate,
        photo: image,
        location: location,
    });
    

export default {
    sendForm,
}