<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click Me</button>
  <Modal />
</template>

<script>
import Modal from "./components/Modal.vue"
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Vue Basics',
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #41B833;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  color: #41B833;
  padding-bottom: 10px;
  display: inline;
}
</style>
