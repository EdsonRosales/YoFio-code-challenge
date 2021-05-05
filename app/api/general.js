import apiBaseURL from "./apiBaseUrl";

const sendForm = (name, lastName, birthdate, image, lat, long) => {
    //This methods "Time() and imageExt()" helps me to create a new name for each image
    const time = () => {
        const timestamp = Math.floor(new Date().getTime() / 1000);
        return timestamp;
    }

    const imageExt = () => {
        const ext = image.split('.').pop();
        return ext;
    }

    const data = new FormData();
    if (image) {
        data.append('photo', {
            name: time().toString() + '.' + imageExt(),
            type: 'image/jpeg',
            uri: image,
        });
    } else {
        data.append('photo', '');
    }
    data.append('name', name);
    data.append('lastName', lastName);
    data.append('birthdate', birthdate);
    data.append('location');
    return apiBaseURL.post('/registration', data);
};

export default {
    sendForm,
}