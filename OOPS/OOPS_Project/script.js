class Library{
    constructor(){
        this.books=[];
    }

    addbooks(bkname){
        this.bkname=bkname;
        this.books.push(bkname);
    }
    listAllBooks(){
        this.books.forEach(function(name){
            console.log(name)
        })
    }
}
class Books{

}


let EtwLibrary=new Library();
EtwLibrary.addbooks("English");
EtwLibrary.addbooks("Hindi")