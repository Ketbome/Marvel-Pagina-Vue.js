<template>
  <div class="container_pages">
    <div class="container_box">
      <div class="container-top">
        <div class="container-top-title">
          <h2 class="section-title">Marvel Characters</h2>
        </div>
        <div class="container-search">
            <input class="search" type="text" v-model="searchTerm" placeholder="Buscar Personaje" @input="handleSearchInput">
        </div>
      </div>
      <div class="grid-container">
        <div v-for="personaje in filteredPersonajes" :key="personaje.id" class="grid-item" @mouseover="showName(personaje)" @mouseleave="hideName">
          <img :src="personaje.thumbnail.path + '.' + personaje.thumbnail.extension" alt="Personaje">
          <div class="name-overlay">{{ personaje.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import '../styles/PageStyles.css';

export default {
  data() {
    return {
      personajes: [],
      offset: 0,
      limit: 30,
      activePersonaje: null,
      searchTerm: '',
      showSearchBox: false,
    };
  },
  created() {
    this.fetchPersonajes();
  },
  computed: {
    filteredPersonajes() {
      const searchTerm = this.searchTerm.toLowerCase();
      return this.personajes.filter(personaje => personaje.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && personaje.name.toLowerCase().includes(searchTerm));
    },
  },
  methods: {
    fetchPersonajes() {
      const ts = '1';
      const publicKey = '39d77a9d8857c84a2422f18b2de8c1d1';
      const hash = 'd871bb31390a8b088f14848d63c14333';

      const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${this.offset}&limit=${this.limit}`;

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
    showName(personaje) {
      this.activePersonaje = personaje;
    },
    hideName() {
      this.activePersonaje = null;
    },
    search() {
      // Restablecer la lista de personajes al estado original antes de realizar la búsqueda
      this.personajes = [];

      // Realizar una nueva llamada a la API con el término de búsqueda como parámetro
      const ts = '1';
      const publicKey = '39d77a9d8857c84a2422f18b2de8c1d1';
      const hash = 'd871bb31390a8b088f14848d63c14333';
      let apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${this.limit}`
      if ( this.searchTerm != ''){
        apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${this.searchTerm}&limit=${this.limit}`
      }
      axios.get(apiUrl)
        .then(response => {
          const nuevosPersonajes = response.data.data.results;
          this.personajes = nuevosPersonajes;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleSearchInput() {
      clearTimeout(this.searchTimeout); // Limpiar el temporizador existente si hay uno
      this.searchTimeout = setTimeout(() => {
        this.search(); // Realizar la búsqueda después de 2 segundos de inactividad
      }, 300);
    },
  },
};
</script>
