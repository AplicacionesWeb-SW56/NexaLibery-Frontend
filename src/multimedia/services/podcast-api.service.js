import http from "@/shared/services/http-common.js";

export class PodcastApiService {
  getAll() {
    return http.get("/podcast");
  }

  create(podcastResource){
    return http.post("/podcast", podcastResource);
  }
}
