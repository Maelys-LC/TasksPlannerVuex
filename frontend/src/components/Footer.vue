<template>
    <footer>
        <p>&copy; Maëlys Le Coz</p>
        <p>2020</p>
    </footer>  
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background: #A17A64;
        color: #343a40;
        padding: 0px 10px 0px 10px;
        /* position: absolute;
        bottom: 0; */
        width: 100%;
        font-size: 20px;
        height: 5vh;
        /* opacity: 0.7; */
    }
    @media screen and (max-width: 1000px) {
        footer {
            font-size: 16px;
            height: 8vh;
        }
        
    }
</style>