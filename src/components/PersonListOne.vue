<template>
        <div>
            <h1>PersonListOne</h1>
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
    name : 'PersonListOne.vue',
    computed:{
        ...mapGetters([
            'persons'
        ]),
        
    }
}
</script>

<style>

</style>