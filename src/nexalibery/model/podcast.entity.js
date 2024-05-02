export class Podcast {
    constructor(id, title, author, shortDescription, published = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.shortDescription = shortDescription;
    }

    /**
     * Create a new Podcast instance from a displayablePodcast object
     * @param displayablePodcast - The displayablePodcast to create the Podcast from
     * @returns {Podcast}
     */
    static fromDisplayablePodcast(displayablePodcast) {
        return new Podcast(
            displayablePodcast.id,
            displayablePodcast.title,
            displayablePodcast.author,
            displayablePodcast.shortDescription
        );
    }

}
