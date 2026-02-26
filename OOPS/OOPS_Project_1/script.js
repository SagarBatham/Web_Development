class Library{
    constructor(){
        this.books=[];
    }

    addbooks(bkname){
        this.books.push(...bkname);
    }
    listAllBooks(){
        this.books.forEach(function(book,idx){
            console.log(`${idx+1} - ${book.name} -${book.author}`)
        })
    }
}
class Books{
    constructor(name,author,price){
        this.name=name;
        this.author=author;
        this.price=price;
        this.isReadstatus=false;
    }

    changeReadStatus(){
        this.isReadstatus=!this.isReadstatus;
    }

    info(){
        console.log(`Book name is ${this.name} and the author is ${this.author} and you have ${this.isReadstatus?"already read":"not read"}`)
    }
}


let EtwLibrary=new Library();
// EtwLibrary.addbooks("English");
// EtwLibrary.addbooks("Hindi")

let b1=new Books("Physics","Sagar",300);

let b2=new Books("Chemistry","Arihant",300);

let b3=new Books("Maths","Oswal",300);
EtwLibrary.addbooks([b1,b2,b3]);
