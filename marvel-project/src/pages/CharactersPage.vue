<template>
  <div>
    <h2>Personajes</h2>
    <ul>
      <li v-for="personaje in personajes" :key="personaje.id">
        {{ personaje.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      personajes: [],
    };
  },
  created() {
    this.fetchPersonajes();
  },
  methods: {
    fetchPersonajes() {
      const ts = '1';
      const publicKey = '39d77a9d8857c84a2422f18b2de8c1d1';
      const hash = 'd871bb31390a8b088f14848d63c14333';

      const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      axios.get(apiUrl)
        .then(response => {
          this.personajes = response.data.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
