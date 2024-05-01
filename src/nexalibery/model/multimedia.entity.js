export class Multimedia {
    constructor(id, title, author, shortDescription, published = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.shortDescription = shortDescription;
    }

    /**
     * Create a new Library instance from a displayableLibrary object
     * @param displayableMultimedia - The displayableLibrary to create the Library from
     * @returns {Multimedia}
     */
    static fromDisplayableMultimedia(displayableMultimedia) {
        return new Multimedia(
            displayableMultimedia.id,
            displayableMultimedia.title,
            displayableMultimedia.author,
            displayableMultimedia.shortDescription
        );
    }

}
