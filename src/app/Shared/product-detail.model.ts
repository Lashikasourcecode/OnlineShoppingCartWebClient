export class ProductDetail {
    ProductId : Number;
    productName : string;
    Quantity:Number;
    image:String;
    Discription:String;
    unitPrice:Number;
    Discount:Number;
    CatergoryId:Number;

    constructor(productId,productName,Quantity,image,Discription,unitPrice,Discount,CatergoryId)
    {
        this.ProductId = productId
        this.productName = productName
        this.Quantity = Quantity
        this.image = image
        this.Discription = Discription
        this.unitPrice = unitPrice
        this.Discount = Discount
        this.CatergoryId = CatergoryId

    }

}
