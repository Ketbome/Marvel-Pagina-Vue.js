<template>
  <div id="app">
    <header>
      <!-- Contenido del encabezado -->
      <nav>
        <div class="desktopNav">
          <div class="NavSuperior">
            <div class="LogoContainer">
              <div>
                <a href="https://github.com/Ketbome">
                  <img class="logo-git" src="./assets/GitHub-logo.png"/>
                </a>
              </div>
              <div class="logo">
                <span class="icon">
                  <img class="logo-marvel" src="./assets/logo.png" alt="Logo de la página" />
                </span>
              </div>
              <div class="nav_derecha">
                <a href="https://www.linkedin.com/in/catopab/">
                  <img class="logo-git" src="./assets/Linked-logo.png" />
                </a>
              </div>
            </div>
          </div>
          <div class="NavInferior">
            <ul class="linkContainer">
              <li
                v-for="option in options"
                :key="option.path"
                class="nav-item"
                @mouseenter="showAnimation = option.path, highlightOption(option.path)"
                @mouseleave="showAnimation = '', resetHighlight()"
                @click="goToPage(option.path)"
                :class="{ active: selectedOption === option.path, highlighted: option.highlighted }"
              >
                <span class="comic-text linkWapper">{{ option.title }}</span>
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
.linkWapper {
    text-transform: uppercase;
    font-weight: 800;
    padding: 0 18px;
    margin: 0 auto;
    cursor: pointer;
    list-style: none;
}

.linkContainer {
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
  bottom: 0;
  left: 50%; /* Posiciona inicialmente en el centro */
  transform: translateX(-50%) scaleX(0); /* Inicia con ancho 0 y centrada horizontalmente */
  transform-origin: center;
  width: 0;
  height: 4px;
  background-color: #ff0000;
  transition: transform 0.3s;
  margin-top: 2px; /* Ajusta este valor según sea necesario */
}

.animated {
  transform: translateX(-50%) scaleX(1); /* Expandir al ancho completo */
  width: 100%;
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
  letter-spacing: 1px;
  font: 400 12px/1 "Condensed Bold","Trebuchet MS",Helvetica,Arial,sans-serif;
  font-size: 15px;
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

.logo {
    display: flex;
    justify-content: center;
    margin: auto;
    left: 0;
    right: 0;
    height: 52px;
    width: 130px;
}

.logo-git {
    display: flex;
    justify-content: center;
    margin: auto;
    left: 0;
    right: 0;
    height: 52px;
    width: auto;
}

.desktopNav {
    width: 100%;
    position: relative;
    background-color: #202020;
    color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.nav_derecha {
    display: flex;
    align-items: center;
}

.LogoContainer {
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
    display: flex;
    width: 100%;
    box-sizing: border-box;
}

.NavSuperior {
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

.NavInferior {
    height: 40px;
    text-align: center;
    display: flex;
    width: 100%;
    box-sizing: border-box;
}

</style>