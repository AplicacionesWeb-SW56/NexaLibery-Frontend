export default class LocalUser {
  id;
  name;
  description;
  email;
  cardNumber;
  bornDate;
  photo;

  constructor(
    id = "",
    name = "",
    email = "",
    description = "",
    cardNumber = "",
    bornDate = "",
    photo = "",
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cardNumber = cardNumber;
    this.email = email;
    this.bornDate = bornDate;
    this.photo = photo;
  }

  static fromObject(obj) {
    return new LocalUser(
      obj.id,
      obj.name,
      obj.email,
      obj.description,
      obj.cardNumber,
      obj.bornDate,
      obj.photo,
    );
  }

  static fromUser(user) {
    return new LocalUser(
      user.id,
      user.name,
      user.email,
      user.description,
      user.cardNumber,
      user.bornDate,
      user.photo,
    );
  }
}
