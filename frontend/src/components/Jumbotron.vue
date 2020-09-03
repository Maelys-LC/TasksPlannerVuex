<template>
    <main>
        <Header/>
        <section>
            
            <h1 id="titre">Todo List</h1>      

            <!-- <Sentence :list="list"/> -->

            <router-view :key="$route.fullPath"/>         
            
        </section> 
        <Footer/>       
    </main>
</template>

<script>
        
    // import Sentence from './Sentence.vue'
    import Header from './Header.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'Jumbotron',
        components: {                    
            // Sentence,
            Header,
            Footer
        }      
    }   
</script> 

<style>
    main {
        background-image: url("../assets/home.jpg");
        background-repeat: no-repeat ;
        background-size: cover;
        height: 100vh;
    }
    section {
        background: whitesmoke;
        width: 90%;
        margin: 20px auto 0 auto;
        padding: 40px;
        border: 2px solid black;
        opacity: 0.9;
        height: 80vh;   
        overflow-y: scroll;     
    }
    #titre {
        font-size: 100px;
        margin-bottom: 30px;
    } 
    @media screen and (max-width: 1000px) {
        section {
            width: 80%;
            margin: 10px auto 0 auto;
        }
        #titre {
            font-size: 40px;
            margin-bottom: 10px;
        } 
    }
</style>