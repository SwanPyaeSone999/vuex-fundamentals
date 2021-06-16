<template>
  <div id="app">
      Name
      <input type="text" v-model="name">
      Age
      <input type="text" v-model="age">
      City
      <input type="text" v-model="city">
      <button @click="add()">Add Person</button>
    <PersonListOne></PersonListOne>
    <PersonListTwo></PersonListTwo>

  </div>
</template>

<script>

import PersonListTwo from './components/PersonListTwo.vue'
import PersonListOne from './components/PersonListOne.vue'
export default {
  name: 'App',
  data(){
    return{
      name : null,
      age : null,
      city : null,
    }
  },
  components: {
    PersonListOne, PersonListTwo,
  },
  methods:{
    add(){
        var payload = {name:this.name,age :this.age, city :this.city}
        this.$store.dispatch('addPerson',payload);
    }
  }
  
}
</script>

<style>

</style>
