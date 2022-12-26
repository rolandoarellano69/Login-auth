<template>
  <h1>Editar</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Descripcion" />
    <br />
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
  console.log(editar);
};
const url = ref('')
onMounted(async() =>{
 url.value =await databaseStore(route.params.id)
})
</script>
