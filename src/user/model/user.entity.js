export default class User {
    id;
    name;
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
        name = "",
        email = "",
        description = "",
        cardNumber = "",
        bornDate = "",
        registerDate = "",
        suscriptionID = "",
        studentProfileID = "",
        photo = ""
    ){
		this.id = id;
		this.name = name;
		this.description = description;
		this.email = email;
		this.cardNumber = cardNumber;
		this.bornDate = bornDate;
		this.registerDate = registerDate;
		this.suscriptionID = suscriptionID;
		this.studentProfileID = studentProfileID;
		this.photo = photo;
    }
}
