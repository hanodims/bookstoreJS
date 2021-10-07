import books from './data.js'


const container = document.getElementById('cardsContainer');

function addBook(index) {
    console.log('im addBook')
    container.innerHTML += `<div class=card>
    <h1 id='name'>${books[index].name}</h1>
    <h4>${books[index].author}</h4>
    <div style="display:flex; justify-content: space-between; ">
        <h4>${books[index].price} SR</h4>
        <button class="buy" onclick="buy()">Buy</button>
    </div>
</div>`;

}

const search = document.getElementById('search')
search.addEventListener('input', findBook)
function findBook(event) {
    container.innerHTML = '';
    const filterBooks = books.filter((book) =>
        `[${book.name},${book.author},${book.id}]`.toLowerCase().includes(event.target.value.toLowerCase())
    );
    browes(filterBooks);
}

window.buy = function buy() {
    console.log('im buy')

}


window.browes = function browes(list = books) {

    list.forEach(book => {
        const content = `<div class=card>
        <h2 id='name'>${book.name}</h2>
        <h4>${book.author}</h4>
        <div style="display:flex; justify-content: space-between; ">
            <h4>${book.price} SR</h4>
            <button class="buy" onclick="buy()">Buy</button>
        </div>
    </div>`
        container.innerHTML += content;
    })
    console.log(container)
}


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("add");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const msg = document.getElementById('msg')
const addForm = document.getElementById("addForm");

addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let id = event.target.bookId.value
    let name = event.target.title.value
    let author = event.target.author.value
    let price = event.target.price.value
    let qnty = event.target.quantity.value
    //console.log(id, id.length)
    if (id && name && author && price && qnty) {
        modal.style.display = "none";
        let index = books.push({ id: id, name: name, author: author, price: price, qnty: qnty })
        msg.innerHTML = ''
        addForm.reset()
        addBook(index - 1)
    }
    else msg.innerHTML = 'Please fill all the fields'

    console.log(books)
})


