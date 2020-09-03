<template>
  <div id="app">
    <Jumbotron/>    
  </div>  
</template>

<script>
import Jumbotron from './components/Jumbotron.vue'


export default {
  name: 'App',
 
  components: {
    Jumbotron
  },
  async beforeMount() {
    await this.getList()
  },
  methods: {
    getList: async function() {
      let results = await this.axios.get('http://localhost:8080/tasks');
      for (let element of results.data) {
        await this.$store.dispatch("ADD", element);        
      }      
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
}
</style>