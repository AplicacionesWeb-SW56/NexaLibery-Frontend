export class SignUpRequest {
  constructor(
    email, 
    password,
    username,
    description,
    cardNumber,
    bornDate,
    photo
  ) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.description = description;
    this.cardNumber = cardNumber;
    this.bornDate = bornDate;
    this.photo = photo;
  }
}
