<template>
    <div>
      <h2>Personajes</h2>
      <ul>
        <li v-for="character in characters" :key="character.id">
          {{ character.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from 'vue';
  
  export default {
    setup() {
      const characters = reactive([]);
  
      onMounted(() => {
        // Realiza la solicitud a la API de Marvel para obtener los personajes y actualiza el arreglo characters
        // characters.push(...);
      });
  
      return {
        characters,
      };
    },
  };
  </script>
  