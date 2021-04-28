import { create } from 'apisauce';
import appConstants from '../config/appConstants';

const apiBaseURL = create({
    baseURL: appConstants.url,
});

export default apiBaseURL;