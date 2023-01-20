import axios from "axios";
import { STACKOVERFLOW_BASE_URL } from '../constant/api';

/* axios封裝 */

const instance = axios.create({
    baseURL: STACKOVERFLOW_BASE_URL
})

export default instance