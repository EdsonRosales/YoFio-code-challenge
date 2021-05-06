import { create } from 'apisauce';
import appConstants from '../config/appConstants';

const apiBaseURL = create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: appConstants.url,
});

export default apiBaseURL;