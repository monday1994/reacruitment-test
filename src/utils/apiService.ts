import axios from 'axios';

import {
    DEAZER_API_DOMAIN
} from '../constants/configuration';

export const dezerAPIclient = axios.create({
    baseURL: DEAZER_API_DOMAIN,
});

