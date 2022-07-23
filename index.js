const db = require("./database/index");

// console.log(db.publication);
// console.log(db.books);
// console.log(db.authors);

const express = require("express");

const app = express();

app.use(express.json());


// get api
app.get("/", (req, res) => {


    return res.json("welcome to main page");
});

http://localhost:3000/books
app.get("/books", (req, res) => {
    const getAllBooks = db.books;

    return res.json(getAllBooks);
});

http://localhost:3000/book/1234one
app.get("/book-isbn/:isbn", (req, res) => {
    const { isbn } = req.params;
    const getSpecificBooks = db.books.filter((book) => { return book.ISBN === isbn });
    // console.log(getSpecificBooks.length);
    if (getSpecificBooks.length === 0) {
        return res.json({ "error": `No books available of ${isbn}` })
    }
    return res.json(getSpecificBooks);
});


http://localhost:3000/book-category/tech
app.get("/book-category/:cate", (req, res) => {
    const { cate } = req.params;

    const getSpecificBooks = db.books.filter((book) => {
        const y = book.category;

        const h = y.filter((x) => x === cate);

        if (h.length > 0)
            return h;

    }

    );
    // console.log(getSpecificBooks.length);
    if (getSpecificBooks.length === 0) {
        return res.json({ "error": `No books available of ${cate}` })
    }
    return res.json(getSpecificBooks);
});


http://localhost:3000/authors
app.get("/authors", (req, res) => {
    const getAllauthors = db.authors;

    return res.json(getAllauthors);
});



http://localhost:3000/book-authors/1
app.get("/book-authors/:id", (req, res) => {
    const { id } = req.params;
    const getAllauthors = db.authors.filter((author) => author.id == id);

    if (getAllauthors.length === 0) {
        return res.json({ "error": `No books available of ${id}` })
    }
    return res.json(getAllauthors);
});


http://localhost:3000/publications
app.get("/publications", (req, res) => {
    const getAllpublications = db.publications;

    return res.json(getAllpublications);
});

http://localhost:3000/publications/1
app.get("/publications/:id", (req, res) => {
    const { id } = req.params;
    const getspecificpublications = db.publications.filter((publication) => publication.id == id);

    if (getspecificpublications.length === 0) {
        return res.json({ "error": `No books available of ${id}` })
    }
    return res.json(getspecificpublications);
});

http://localhost:3000/author-isbn/1234one
app.get("/author-isbn/:isbn", (req, res) => {
    const { isbn } = req.params;
    const getSpecificBooks = db.authors.filter((author) => {
        const y = author.books;

        const h = y.filter((x) => x === isbn);

        if (h.length > 0)
            return h;

    }

    );

    if (getSpecificBooks.length === 0) {
        return res.json({ "error": `No books available of ${cate}` })
    }
    return res.json(getSpecificBooks);
})



http://localhost:3000/publication-isbn/1234one
app.get("/publication-isbn/:isbn", (req, res) => {
    const { isbn } = req.params;
    const getSpecificBooks = db.publications.filter((author) => {
        const y = author.books;

        const h = y.filter((x) => x === isbn);

        if (h.length > 0)
            return h;

    }

    );

    if (getSpecificBooks.length === 0) {
        return res.json({ "error": `No books available of ${cate}` })
    }
    return res.json(getSpecificBooks);
})

// post api starts

http://localhost:3000/book
app.post("/book", (req, res) => {
    // console.log(req.body);
    // const  {newbook}=req.body;
    // console.log(newbook);
    db.books.push(req.body);
    return res.json(db.books);
});


http://localhost:3000/author
app.post("/author", (req, res) => {
    // console.log(req.body);
    // const  {newbook}=req.body;
    // console.log(newbook);
    db.authors.push(req.body);
    return res.json(db.authors);
});

http://localhost:3000/publication
app.post("/publication", (req, res) => {
    // console.log(req.body);
    // const  {newbook}=req.body;
    // console.log(newbook);
    db.publications.push(req.body);
    return res.json(db.publications);
});

// put api 

http://localhost:3000/book/update/1234one
app.put("/book/update/:isbn", (req, res) => {
    const { isbn } = req.params;
    console.log(req.params);
    console.log(req.body);
    db.books.forEach((book) => {
        if (book.ISBN == isbn) {
            console.log({ ...book, ...req.body });
            return { ...book, ...req.body };
        }
        return book;
    })

    return res.json(db.books);
})



http://localhost:3000/author/update/:id
app.put("/author/update/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    console.log(req.body);
    db.authors.forEach((book) => {
        if (book.id == id) {
            console.log({ ...book, ...req.body });
            return { ...book, ...req.body };
        }
        return book;
    })

    return res.json(db.authors);
})


http://localhost:3000/author/update/:id
app.put("/publication/update/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    console.log(req.body);
    db.publications.filter((book) => {
        if (book.id == id) {
            console.log({ ...book, ...req.body });
            return { ...book, ...req.body };
        }
        return book;
    })

    return res.json(db.publications);
})

// delete api

app.delete("/publication/delete/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    
    const newarr=db.publications.filter((book) => 
        book.id!=id
    )
    db.publications=newarr;
    return res.json(db.publications);
})

app.delete("/author/delete/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    
    const newarr=db.authors.filter((book) => 
        book.id!=id
    )
    db.authors=newarr;
    return res.json(db.authors);
})


app.delete("/book/delete/:isbn", (req, res) => {
    const { isbn } = req.params;
    console.log(req.params);
    console.log(req.body);
    const newarr=db.books.filter((book) => 
        book.ISBN!==isbn
    )
    db.books=newarr;
    return res.json(db.books);
})


app.listen(3000, () => {
    console.log("MY express app is running.........");
})