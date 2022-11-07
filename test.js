
const Container = require("./index")



async function test() {
    let products = new Container('products.txt')
    let save = await products.save({
        "name": "Talleres",
        "price": 2200,
        "src": "/resources/img/product-images/talleres"
    });

    let getAll = await products.getAll();
    let getById = await products.getById(1);
    let deleteById = await products.deleteById(2);
    // let deleteAll = await products.deleteAll();
    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    // console.log(deleteAll);

};
test();