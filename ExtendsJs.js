//extends
import Coupon from './ClassJs.js';
class FlashCoupon extends Coupon {
    //생성자 overriding
    constructor(price, expiration){
        //부모거 그대로 사용시 super
        super(price);
        this.expiration = expiration || '2시간'
    }

    // constructor(...args){
    //     super(args);
    // }
    //method overriding
    get expirationMessage(){
        return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
    }
}

const flash = new FlashCoupon(10);

console.log(flash.expirationMessage)