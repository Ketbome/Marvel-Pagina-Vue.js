<template>
  <div id="app">
    <header>
      <!-- Contenido del encabezado -->
      <div class="header-top">
        <!-- Logo de la página -->
        <div class="logo">
          <img src="./assets/logo.png" alt="Logo de la página" />
        </div>
      </div>
      <nav>
        <div
          v-for="option in options"
          :key="option.path"
          class="nav-item"
          @mouseenter="showAnimation = option.path, highlightOption(option.path)"
          @mouseleave="showAnimation = '', resetHighlight()"
          @click="goToPage(option.path)"
          :class="{ active: selectedOption === option.path, highlighted: option.highlighted }"
        >
          <span class="comic-text">{{ option.title }}</span>
          <div class="underline" :class="{ animated: showAnimation === option.path }"></div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Contenido dinámico de las páginas -->
      <router-view></router-view>
    </main>

    <footer>
      <!-- Contenido del pie de página -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { title: 'Inicio', path: '/' , highlighted: 'true' },
        { title: 'Personajes', path: '/personajes', highlighted: 'true' },
        { title: 'Películas', path: '/peliculas', highlighted: 'true' },
        { title: 'Series', path: '/series', highlighted: 'true' },
        { title: 'Cómics', path: '/comics', highlighted: 'true' },
      ],
      selectedOption: '',
      showAnimation: false,
    };
  },
  methods: {
    goToPage(path) {
      this.selectedOption = path;
      this.$router.push(path);
    }, 
    highlightOption(path) {
      this.options.forEach((option) => {
        option.highlighted = option.path === path;
      });
    },
    resetHighlight() {
      this.options.forEach((option) => {
        option.highlighted = true;
      });
  },
    
  },
};
</script>

<style>
header {
  background-color: #000000;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: center;
}

.nav-item {
  position: relative;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color:#ffffff
}

.underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ff1616;
  transition: width 0.4s;
}

.animated {
  width: 100%;
}

.active {
  color: rgb(255, 24, 24);
}

.page-content {
  padding: 20px;
}

.comic-text {
  font-weight: bolder;
  text-transform: uppercase;
  font-family: 'MarvelFont', sans-serif;
  letter-spacing: 2px; /* Ajusta el espaciado entre caracteres según sea necesario */
  font-size: 25px; /* Ajusta el tamaño de la fuente según sea necesario */
  margin-top: 5px;
}


@font-face {
  font-family: 'MarvelFont';
  src: url('./assets/Marvel-Regular.ttf') format('truetype');
  /* Otros estilos de fuente o decoración que desees agregar */
}

.nav-item.highlighted {
  color: #ffffff; /* Color de texto para opción resaltada */
  transition: color 1s;
}

.nav-item:not(.highlighted) {
  color: #888; /* Color de texto para opciones no resaltadas */
  transition-delay: 0.5;
}

.header-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Ajusta la altura deseada */
  border-bottom: 1px solid gray; /* Color y estilo de la línea */
}

.header-top img {
  width: 200px;
  height: auto;
  
}


</style>