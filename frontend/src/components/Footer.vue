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
        background: #343a40;
        color: whitesmoke;
        padding: 5px 10px 5px 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: 20px;
    }
    @media screen and (max-width: 1000px) {
        footer {
            font-size: 16px;
        }
        
    }
</style>