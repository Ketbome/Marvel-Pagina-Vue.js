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
import '@/styles/AppStyles.css';
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
body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 20px;
    line-height: 1.3;
}

.logo-marvel{
  width: 130px;
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

div {
    margin: 0;
    padding: 0;
}

</style>