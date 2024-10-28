//Cree class Error
class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error";
    }
}

//Cree class TypeError
class TypeError extends Error {
    constructor(message) {
        super(message);
        this.name = "TypeError";
    }
}

