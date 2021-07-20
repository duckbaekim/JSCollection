//classInit
class Coupon {
    //생서자
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration || "2주";
    }
    //클래스는 전부 public

    //  getPriceText(){
    //      return `$ ${this.price}`;
    //  }
    // 위코드를 게터로 변경 가능

    get priceText() {
        return `$ ${this.price}`;
    }

    get expirationMessage() {
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
    }
}

// const coupon = new Coupon(5);
// console.log(coupon.price, coupon.expiration)
// //5 2

export default Coupon;
