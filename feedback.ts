export class Feedback {
    public question: string;
    public answer:string;
    public hide: boolean
    constructor(question:string,answer:string){
        this.question = question
        this.answer = answer
        this.hide= true
    }

    toggle(){
        this.hide = !this.hide
    }

}
