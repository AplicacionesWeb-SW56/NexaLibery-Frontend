// Assuming you have a file podcast.entity.js that contains the Podcast class
import http from "@/shared/services/http-common";
import { Podcast } from "@/nexalibery/model/podcast.entity.js";

export class PodcastService {
    async getMostViewedPodcasts() {
        try {
            const response = await http.get('/MostTransmitted');
            return response.data.map(Podcast.fromDisplayablePodcast);
        } catch (error) {
            console.error('Failed to fetch most viewed podcasts:', error);
            throw error;
        }
    }

    async getRecommendedPodcasts() {
        try {
            const response = await http.get('/RecommendationsForYou');
            return response.data.map(Podcast.fromDisplayablePodcast);
        } catch (error) {
            console.error('Failed to fetch recommended podcasts:', error);
            throw error;
        }
    }
}

// Export an instance of PodcastService
export default new PodcastService();
