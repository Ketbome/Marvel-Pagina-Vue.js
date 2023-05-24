<style>
header {
  background-color: #f2f2f2;
  padding: 20px;
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
}

.underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: width 0.3s;
}

.animated {
  width: 100%;
}

.active {
  color: blue;
}

.page-content {
  padding: 20px;
}

</style>