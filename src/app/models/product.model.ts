export class Product {
    id: number;
    name: string;
    desc: string;
    imagePath: string;
    price: number;

    constructor(id: number, name: string, desc: string, imagePath: string, price: number) {
        this.name = name;
        this.desc = desc;
        this.imagePath = imagePath;
        this.price = price;
        this.id = id;
    }
}
