const Product = require("./Product");

module.exports=class Magazines extends Product{
    constructor(name, publisher, subject, isWeekly=true, price, stock){
        super(name, {publisher, subject, isWeekly}, price, stock);
    }
}