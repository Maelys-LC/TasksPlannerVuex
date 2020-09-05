<template>
    <div id="body"> 
        <Header/>
        <main>
           
            <section id="blog">
                
                    

                <!-- <Sentence :list="list"/> -->

                <router-view :key="$route.fullPath"/>         
                
            </section> 
        </main>

        <Footer/>       
    </div>
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
    * {
        margin: 0;
        padding: 0;
    }
    main {
        background-image: url("../assets/home.jpg");
        background-repeat: no-repeat ;
        background-size: cover;
        height: 87vh;
        overflow-y: scroll;  
    }
    #blog {
        /* background: whitesmoke; */
        width: 90%;
        margin: 60px auto 0 auto;
        /* padding: 40px; */
        /* border: 2px solid black; */
        /* opacity: 0.9; */
        height: 80vh;   
           
    }
    
    @media screen and (max-width: 1000px) {
        main {
            height: 78vh;
        }
        #blog {
            width: 80%;
            margin: 10px auto 0 auto;
        }
       
    }
</style>