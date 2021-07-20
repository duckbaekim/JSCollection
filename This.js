//this 전부 보단 자주쓰이는 상황만 정리

class This {
    constructor() {
        this.message = "가 유효하지 않습니다.";
        this.setInvalidMessage = this.setInvalidMessage.bind(this);
    }

    setInvalidMessage(field) {
        return `${field}${this.message}`;
        //여기서 this 는 class에 대한 this bind
    }

    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage);
        //여기서 this 는 배열메서드의 문맥
        //때문에 bind를 통한 명시적 연결이 필요
        //this.setInvalidMessage 를 생성자에서 명시적 바인드 시켜준다(다른 메서드에서 사용시 다시 bind하는 것을 방지)
    }
    message2 = "가 유효하지 않습니다.";
    setArrowMessage = (field) => `${field}${this.message2}`;
    setArrowFcInvalidMessages(...fields) {
        return fields.map(this.setArrowMessage);
    }
    //arrow Fuction 으로 this bind
}
const thisTest = new This();
