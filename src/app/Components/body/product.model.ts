export class ProductModel {
    title: string;
    body: string;
    buttonText: string;
    img: string;
    imgDescription: string;

    constructor(title: string, body: string, buttonText: string, img: string, imgDescription: string){
        this.title =title;
        this.body = body;
        this.buttonText=buttonText;
        this.img = img;
        this.imgDescription = imgDescription;
    }
}