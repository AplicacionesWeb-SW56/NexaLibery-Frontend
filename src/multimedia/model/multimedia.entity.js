export class Multimedia {
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
		const multimedia = new Multimedia();
		multimedia.id = res.id;
		multimedia.title = res.title;
		multimedia.description = res.description;
		multimedia.creationDate = res.creationDate;
		multimedia.premium = res.premium;
		multimedia.url = res.url;
		multimedia.pic = res.pic;
		return multimedia;
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
