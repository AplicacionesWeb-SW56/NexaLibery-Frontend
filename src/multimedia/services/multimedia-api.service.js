import http from "@/shared/services/http-common.js";

export class MultimediaApiService {
  getAll() {
    return http.get("/multimedia");
  }

  create(multimediaResource){
    return http.post("/multimedia", multimediaResource);
  }
}
