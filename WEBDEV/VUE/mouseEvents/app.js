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
            mouseX: 0,
            mouseY: 0,
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
        toggleShowSneakyCount() {
            this.showSneakyCount = !this.showSneakyCount
        },
        handleEvent(e, num) {
            console.log(e, e.type)
            if(num) { // if it has a value
                console.log(num)
            }
        },
        handleMouseMove(e) {
            this.mouseX = e.offsetX 
            this.mouseY = e.offsetY
        }
    }
})

app.mount('#app') // # means with the id of app (using id because you can't use that with anything else )