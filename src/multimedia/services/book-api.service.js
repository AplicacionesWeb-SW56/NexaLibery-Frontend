import http from "@/shared/services/http-common.js";

export class BookApiService {
  getAll() {
    return http.get("/library");
  }

  create(bookResource){
    return http.post("/library", bookResource);
  }
}
