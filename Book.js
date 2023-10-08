const Product = require("./Product")

module.exports= class Book extends Product{
    constructor(title, author, pages, genre, price, stock){
        super(`Livro:${title}`, {author, pages, genre}, price, stock)
    }

}

