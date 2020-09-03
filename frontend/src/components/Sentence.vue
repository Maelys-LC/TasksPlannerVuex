<template>
    <p :id="progress.id"><b-icon :icon="progress.icon"></b-icon> {{progress.text}} <b-icon :icon="progress.icon"></b-icon></p>   
</template>


<script>
    export default {
        name: 'Sentence',
        props: ['list'],
        computed: {
            progress: function() {
                let total = this.list.length;
                let numberDone = this.list.filter((element) => !element.todo).length;
                let numberTodo = this.list.filter((element) => element.todo).length;

                if (numberDone === total) {
                    return {id: "green",text: `Congratulation !! You finished all the ${total} tasks.`, icon: `emoji-sunglasses`}
                } else if (numberDone >= total / 2) {
                    return {id: "lightGreen",text: `Good!! You made it halfway or more (${numberDone} on ${total} tasks).`, icon: `emoji-laughing`}
                } else if (numberDone > 0 && numberDone < total / 2) {
                    return {id: "orange",text: `Continue that way and you will finish soon, you still have ${numberTodo} on ${total} tasks to do.`, icon: `emoji-smile`}
                } else {
                    return {id: "red",text: `It's time to start working you have ${total} tasks to do !!`, icon: `emoji-frown`}
                }               
                
            }
        }           
    }
</script>

<style scoped>
    #red {
        color: #CD0E1D;
    }
    #green {
        color: #0D6626;
        font-weight: bold;
    }
    #lightGreen {
        color: #0ECD53;
    }
    #orange {
        color: #E7933E;
    }
</style>