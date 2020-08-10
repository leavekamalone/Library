let myLibrary = [
   /* {
        author: "JK Rowling",
        title: "Harry Potter",
        pages: 570,
        read: "yes"
    },
    {
        author: "Ernest Hemmingway",
        title: "Old Man and the Sea",
        pages: 220,
        read: "no"
    },*/
];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    
    this.pages = pages;
    this.read = read;
    //this.info = function() {
    //  render();

   // };
  }

function addBookToLibrary(x) {
    myLibrary.push(x);
    //myLibrary.x


   

    render();

    

    //render();

}
//addBookToLibrary();




function render() {
    
    //for (let i = 0; i < myLibrary.length; i++){
        
 const table = document.getElementById("datas");
 table.innerHTML="";
 let tr="";
 myLibrary.forEach(x=>{
   console.log(x);
   //console.log(myLibrary.x);
  
        tr+='<tr>';
     tr+='<td>'+x.author+'</td>'+'<td>'+x.title+'</td>'+'<td>'+x.pages+'</td>'+'<td>'+x.read + '</td>';
   

     tr+='</tr>';


     

 })
 
 table.innerHTML += tr;

 for (let i = 0; i< myLibrary.length; i++){
    const table = document.getElementById("datas");
   let btn = document.createElement("BUTTON");
   btn.innerHTML = "DELETE";
   btn.setAttribute("id", i);
   let read = document.createElement("BUTTON");
       read.innerHTML = "Change Read Status";
       read.setAttribute("id", (i+0.5));
       table.appendChild(read);
   table.appendChild(btn);
    }

    /*for (let i = 0; i< myLibrary.length; i++){
        const table = document.getElementById("datas");
       let read = document.createElement("BUTTON");
       read.innerHTML = "Change Read Status";
       read.setAttribute("id", (i+0.5));
       table.appendChild(read);
        }*/

}


Book.prototype.readStatus = function() {
    if (this.read === "yes"){
        this.read = "no";
    }
    else {
        this.read = "yes";
    }
}



const btnDelete = document.getElementById('datas');
btnDelete.addEventListener('click', function(e) {
   const target = e.target;
   //const matches = document.querySelectorAll("button");
   console.log(target)

   let other = parseFloat(target.id);
   let deleteT = Number.isInteger(other);
   console.log(deleteT);
   console.log(other);
   if ( deleteT === true) {


       removeSome(other);
 
       //removeSome(0);
      render();
      //addBookToLibrary();

   }

   else {
       let readChange = (other - 0.5);

        myLibrary[readChange].readStatus();
        render();

   }
   //addBookToLibrary();
})


function removeSome(x) {
    myLibrary.splice(x,1);



}


window.onload =  render();

/*const btn = document.querySelector('.remove');
btn.addEventListener('click', () => {
    myLibrary.shift();
    render();
})*/


function openForm() {
    document.getElementById("myForm").style.display = "block";

}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


let authorValue = '';
let titleValue = '';
let pagesValue = '';
let checkRead = '';


const sub = document.querySelector('#mainForm');
sub.addEventListener('submit', (e) => {
    e.preventDefault();
    let authorValue = document.getElementById("author").value;
    let titleValue = document.getElementById("title").value;
    let pagesValue = document.getElementById("pages").value;
    let checkRead = document.getElementById("read");
    let pagesNum = parseInt(pagesValue,10);
    if (authorValue === '' || titleValue === '' || pagesNum === '') {
        closeForm();
    newForm();
    
    }
    
    else if (checkRead.checked == true){
        let newBook = new Book(authorValue,titleValue,pagesNum, 'yes');
        addBookToLibrary(newBook);
       // console.log(newBook);
        closeForm();
        newForm();


    }
    else {
        let newBook = new Book(authorValue,titleValue,pagesNum, 'no');
    addBookToLibrary(newBook);
   // console.log(newBook);
    closeForm();
    newForm();
    //please();

    }

    
   // let newBook = new Book(authorValue,titleValue,pagesValue, checkRead);
    //addBookToLibrary(newBook);
   // console.log(newBook);
    //closeForm();


})


function newForm () {
    document.getElementById("mainForm").reset();
}