let books = [
    {
        ISBN: "1234one",
        title: "Getting started with mern",
        authors: [1, 2], // giving id in authors array because id is unique but name may be same 
        language: "en",
        pubDate: "2021-01-01",
        numofpage: 225,
        category: ["fiction", "programming"],
        publication: 1
    },
    {
        ISBN: "1232two",
        title: "Getting started with python",
        authors: [3, 2],
        language: "german",
        pubDate: "2021-01-01",
        numofpage: 669,
        category: ["fiction", "programming","horror","tech"],
        publication: 2
    }
];

let authors = [
    {
        id: 1,
        name: "bankush",
        books: ["1234one", "1232two"]
    },
    {
        id: 2,
        name: "navdeep",
        books: ["1234one"]
    }, {
        id: 3,
        name: "jharkandi",
        books: ["1232two"]
    }
]

let publications=[
    {
        id:"1",
        name:"banku publications",
        books: ["1234one", "1232two"]
    },
    {
        id:"2",
        name:"jharkandi publications",
        books: ["12346one", "12232two"]
    }
]

module.exports={books,authors,publications};