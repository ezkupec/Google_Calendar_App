export class ProductModel {
    title: string;
    body: string;
    L1: string;
    L2:string;
    L3:string;
    img: string;
    imgDescription: string;

    constructor(title: string, body: string, L1: string, L2:string, L3:string, img: string, imgDescription: string){
        this.title =title;
        this.body = body;
        this.L1 = L1;
        this.L2 = L2;
        this.L3 = L3;
        this.img = img;
        this.imgDescription = imgDescription;
    }
}