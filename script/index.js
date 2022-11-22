

// Data Abstraction

const Book = function(title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = () => {
        return this.title;
    };

    this.getAuthor = () => {
        return this.author;
    };
}

// var myBook = new Book("Harry Potter", "JK Rowling");

const Square = function(sideLengths) {
    this.sideLengths = sideLengths;
    this.area = Math.pow(this.sideLengths, 2)
}

// var mySquare = new Square(4);

// console.log(mySquare.area)
// returns 16