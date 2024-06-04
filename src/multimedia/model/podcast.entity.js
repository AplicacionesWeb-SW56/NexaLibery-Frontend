export class Podcast {
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
		const podcast = new Podcast();
		podcast.id = res.id;
		podcast.title = res.title;
		podcast.description = res.description;
		podcast.creationDate = res.creationDate;
		podcast.premium = res.premium;
		podcast.url = res.url;
		podcast.pic = res.pic;
		return podcast;
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
