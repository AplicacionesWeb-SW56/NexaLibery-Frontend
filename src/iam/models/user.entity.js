export default class User {
  id;
  username;
  description;
  email;
  cardNumber;
  bornDate;
  registerDate;
  suscriptionID;
  studentProfileID;
  photo;

  constructor(
    id = "",
    username = "",
    email = "",
    description = "",
    cardNumber = "",
    bornDate = "",
    registerDate = "",
    suscriptionID = "",
    studentProfileID = "",
    photo = "",
  ) {
    this.id = id;
    this.username = username;
    this.description = description;
    this.email = email;
    this.cardNumber = cardNumber;
    this.bornDate = bornDate;
    this.registerDate = registerDate;
    this.suscriptionID = suscriptionID;
    this.studentProfileID = studentProfileID;
    this.photo = photo;
  }

  static fromResponse(response){
    return new User(
      response.id,
      response.username,
      response.email,
      response.description,
      response.cardNumber,
      response.bornDate,
      response.registerDate,
      response.suscriptionID,
      response.studentProfileID,
      response.photo
    );
  }

  fromStorage(local){
    return new User(
      local.id,
      local.username,
      local.email,
      local.description,
      local.cardNumber,
      local.bornDate,
      local.registerDate,
      local.suscriptionID,
      local.studentProfileID,
      local.photo
    );
  }
}
