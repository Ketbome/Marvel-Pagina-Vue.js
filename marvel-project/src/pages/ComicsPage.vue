<template>
  <div>
    <h2>Comics</h2>
    <ul>
      <li v-for="comic in comics" :key="comic.id">
        {{ comic.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      comics: [],
    };
  },
  created() {
    this.fetchComics();
  },
  methods: {
    fetchComics() {
      const ts = '1';
      const publicKey = '39d77a9d8857c84a2422f18b2de8c1d1';
      const hash = 'd871bb31390a8b088f14848d63c14333';

      const apiUrl = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      axios.get(apiUrl)
        .then(response => {
          this.comics = response.data.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
