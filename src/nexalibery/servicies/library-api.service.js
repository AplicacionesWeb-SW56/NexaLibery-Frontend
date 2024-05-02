import http from "@/shared/services/http-common";
import {Library} from "@/nexalibery/model/library.entity.js";

export class LibraryService {
    async getBooks() {
        try {
            const response = await http.get('/Library');
            return response.data.map(book => Library.fromDisplayableLibrary(book));
        } catch (error) {
            console.error('Failed to fetch books:', error);
            throw error;
        }
    }
}

export default new LibraryService();
