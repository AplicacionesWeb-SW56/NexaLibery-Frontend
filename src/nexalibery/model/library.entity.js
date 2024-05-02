export class Library {
    constructor(id, title, author, shortDescription, published = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.shortDescription = shortDescription;
    }

    /**
     * Create a new Library instance from a displayableLibrary object
     * @param displayableLibrary - The displayableLibrary to create the Library from
     * @returns {Library}
     */
    static fromDisplayableLibrary(displayableLibrary) {
        return new Library(
            displayableLibrary.id,
            displayableLibrary.title,
            displayableLibrary.author,
            displayableLibrary.shortDescription
        );
    }

}
