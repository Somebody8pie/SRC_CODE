const app = Vue.createApp({
    // data, functions
    // template: "<h2>I'm a template</h2>"
    data() {
        return {
            books: [
                { title: "James and the Giant Peach", author: "Roald Dahl", publishDate: 1961, img: "https://images-na.ssl-images-amazon.com/images/I/81P+Kws4Z-L.jpg" },
                { title: "When the Sea turned to Sliver", author: "Grace Lin", publishDate: 2016, img: "https://m.media-amazon.com/images/I/61gU-aFg2ZL.jpg" },
                { title: "Harry Potter and the Philosophers Stone", author: "J.K Rowling", publishDate: 1997, img: "https://images-na.ssl-images-amazon.com/images/I/51mtZy7oJVL.jpg" }
            ],
            clicks: 0,
            showBooks: false,
            textShow: "Show books",
            url: "https://www.youtube.com/channel/UC9rmRAadamujhNqgnMCEMuA/",
        }
    },
    methods: {
        clicksUp() {
            this.clicks++
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
            this.textShow = "Show books"
            if(this.showBooks == true) {
                this.textShow = "Hide books"
            }
        },
    }
})

app.mount('#app') // # means with the id of app (using id because you can't use that with anything else )