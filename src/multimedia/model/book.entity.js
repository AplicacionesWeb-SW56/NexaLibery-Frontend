export class Book {
	id;
	title;
	description;
	creationDate;
	premium;
	url;
	pic;

	constructor(
		id = "",
		title = "",
		description = "",
		creationDate = "",
		premium = "",
		url = "",
		pic = ""
	){
		this.id = id
		this.title = title
		this.description = description
		this.creationDate = creationDate
		this.premium = premium
		this.url = url
		this.pic = pic
	}

	static fromResource(res){
		const book = new Book();
		book.id = res.id;
		book.title = res.title;
		book.description = res.description;
		book.creationDate = res.creationDate;
		book.premium = res.premium;
		book.url = res.url;
		book.pic = res.pic;
		return book;
	}

  toResource(){
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      creationDate: this.creationDate,
      premium: this.premium,
      url: this.url,
      pic: this.pic,
    }
  }
}
