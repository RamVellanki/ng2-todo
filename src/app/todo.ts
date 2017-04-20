export class TODO {
    /**
     *
     */
    constructor(isDone: boolean, desc: String) {
        this.isDone = isDone;
        this.description = desc;
    }
    isDone: boolean;
    description: String;
}