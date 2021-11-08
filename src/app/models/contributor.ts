export class Contributor {
    name: string;
    pictureUrl: string;
    description: string;

    constructor(name: string, pictureUrl: string, description: string) {
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.description = description;
    }
}
