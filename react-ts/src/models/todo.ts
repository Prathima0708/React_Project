class Todo{     //this classname can also be used as a type 
    id:string;
    text:string;

    constructor(todoText:string){
        this.text=todoText;
        this.id=new Date().toISOString()
    }
}
export default Todo
