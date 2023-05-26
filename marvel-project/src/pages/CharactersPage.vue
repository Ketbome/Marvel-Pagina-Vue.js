<template>
  <div>
    <h2>Personajes</h2>
    <ul>
      <li v-for="personaje in personajes" :key="personaje.id">
        {{ personaje.name }}
      </li>
    </ul>
    <button @click="loadMore">Cargar más</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      personajes: [],
      offset: 0,
      limit: 20,
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

      const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${this.offset}&limit=${this.limit}`;

      axios.get(apiUrl)
        .then(response => {
          const nuevosPersonajes = response.data.data.results;
          this.personajes = [...this.personajes, ...nuevosPersonajes];
        })
        .catch(error => {
          console.error(error);
        });
    },
    loadMore() {
      this.offset += this.limit;
      this.fetchPersonajes();
    },
  },
};
</script>
