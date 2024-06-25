export class SignInResponse {
  constructor(token, id, email) {
    this.id = id;
    this.email = email;
    this.token = token;
  }
}
