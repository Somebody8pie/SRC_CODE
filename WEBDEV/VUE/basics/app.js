const app = Vue.createApp({
    // data, functions
    // template: "<h2>I'm a template</h2>"
    data() {
        return {
            title: "James and the Giant Peach",
            author: "Roald Dahl",
            publishDate: 1961,
            clicks: 0,
            sneakyCount: 0,
            showSneakyCount: false,
        }
    },
    methods: {
        publishDateUp() {
            this.publishDate++
        },
        publishDateDown() {
            this.publishDate--
        },
        clicksUp() {
            this.clicks++
        },
        sneakyCountUp() {
            this.sneakyCount++
            showSneakyCount = true
        },

    }
})

app.mount('#app') // # means with the id of app (using id because you can't use that with anything else )