<template>
        <div>
            <h1>PersonListTwo</h1>
            <div>list</div>
            <ul>
                <li v-for="persons in persons" :key="persons.name">
                    {{persons.name}} - {{persons.age}} - {{persons.city}}
                </li>
            </ul>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    name : 'PersonListTwo.vue',
    computed:{
        ...mapGetters([
            'persons'
        ]),
        // persons(){
            
        //     // return this.$store.getters.persons
        // }
    },
    created(){
        console.log(this.persons)
    }
}
</script>

<style>

</style>