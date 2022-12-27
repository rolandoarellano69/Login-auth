<template>
  <h1>Editar</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Ingrese Url" v-model="url">
    <br />
    <br/>
    <button type="submit">Editar</button>

  </form>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import {useDatabaseStore} from '../stores/database'
const databaseStore = useDatabaseStore()

const route = useRoute();
// console.log(route.params.id)
const handleSubmit = () => {
  databaseStore.updateUrl(route.params.id, url.value);
  
};
const url = ref('')
onMounted(async() =>{
 url.value =await databaseStore.leerUrl(route.params.id)
})
</script>
