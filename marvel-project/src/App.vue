<template>
  <div id="app">
    <header>
      <!-- Contenido del encabezado -->
      <nav>
        <div class="desktopNav">
          <div class="desktopNav__upper">
            <div class="desktopNav__tabAndLogoContainer">
              <div></div>
              <div class="logo">
                <span class="icon">
                  <img class="logo-marvel" src="./assets/logo.png" alt="Logo de la página" />
                </span>
              </div>
              <div class="desktopNav__right-links"> Suscribete</div>
            </div>
          </div>
          <div class="desktopNav__lower">
            <ul class="desktopNav__linkContainer">
              <li
                v-for="option in options"
                :key="option.path"
                class="nav-item"
                @mouseenter="showAnimation = option.path, highlightOption(option.path)"
                @mouseleave="showAnimation = '', resetHighlight()"
                @click="goToPage(option.path)"
                :class="{ active: selectedOption === option.path, highlighted: option.highlighted }"
              >
                <span class="comic-text desktopNav__linkWrapper">{{ option.title }}</span>
                <div class="underline" :class="{ animated: showAnimation === option.path }"></div>
              </li>
            </ul>
          </div>
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
.logo-marvel{
  width: 130px;
}

.icon {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 20px;
    line-height: 1.3;
}
.desktopNav__linkWrapper {
    text-transform: uppercase;
    font-weight: 800;
    padding: 0 18px;
    margin: 0 auto;
    cursor: pointer;
    list-style: none;
}

.desktopNav__linkContainer {
    display: flex;
    margin: 0 auto;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  display: block;
  height: 92px;
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
  font-family: "Roboto";
  font-weight: normal;
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

.logo {
    display: flex;
    justify-content: center;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    height: 52px;
    width: 130px;
}

.desktopNav {
    width: 100%;
    position: relative;
    background-color: #202020;
    color: #fff;
    font-family: "Regular","Trebuchet MS",Helvetica,Arial,sans-serif;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.desktopNav__right-links {
    font: 400 12px/1 "Condensed Bold","Trebuchet MS",Helvetica,Arial,sans-serif;
    color: #e62429;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    z-index: 1;
    flex-direction: row;
}

.desktopNav__tabAndLogoContainer {
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
    display: flex;
    width: 100%;
    box-sizing: border-box;
}

.desktopNav__upper {
    height: 52px;
    border-bottom: 1px solid #393939;
    padding: 0px 20px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
}

div {
    margin: 0;
    padding: 0;
}

.desktopNav__lower {
    height: 40px;
    text-align: center;
    display: flex;
    width: 100%;
    box-sizing: border-box;
}

</style>