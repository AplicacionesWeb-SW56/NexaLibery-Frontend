import http from "@/shared/services/http-common";
import {Multimedia} from "@/nexalibery/model/multimedia.entity.js";

export class MultimediaService {
    async getMultimedia() {
        try {
            const response = await http.get('/Multimedia');
            return response.data.map(multimedia => Multimedia.fromDisplayableMultimedia(multimedia));
        } catch (error) {
            console.error('Failed to fetch books:', error);
            throw error;
        }
    }
}

export default new MultimediaService();