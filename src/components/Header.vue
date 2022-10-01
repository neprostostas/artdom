<template>
    <header>

      <div class="headerWrapper">
        <div class="headerAbsolute">

          <div class="logoWrapper">
            <router-link to="/main">
              <img class="logoImg" src="../assets/logo.png" alt="logo">
              <img class="logoImgMb" src="../assets/logo_mb.png" alt="logoMb">
            </router-link>
          </div>

          <nav role='navigation'>

            <div class="navContent">
              <router-link to="/products">Ассортимент</router-link>
              <router-link to="/about-us">О Компании</router-link>
              <router-link to="/contacts">Контакты</router-link>
              <router-link to="/events">События</router-link>
            </div>

            <div id="menuToggle">
              <input id="inputBurger" @click="staticBody" type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <router-link @click="checkInput" to="/home">Главная</router-link>
                <router-link @click="checkInput" to="/products">Ассортимент</router-link>
                <router-link @click="checkInput" to="/about-us">О Компании</router-link>
                <router-link @click="checkInput" to="/contacts">Контакты</router-link>
                <router-link @click="checkInput" to="/events">События</router-link>
              </ul>
            </div>
          </nav>

        </div>
      </div>

    </header>
</template>

<script>

export default {
  name: 'CustomHeader',

  components: {
  },

  setup() {

  function staticBody() {
    document.body.classList.toggle('static');
    document.getElementById("menu").classList.toggle('on');
  }

  function checkInput() {
    document.getElementById("inputBurger").checked = false;
    document.getElementById("menu").classList.remove('on');
    document.body.classList.remove('static');
  }

    return {
      staticBody,
      checkInput,
    }
  }
}
</script>

<style>

.headerWrapper {
  /* background: #f3f3f3; */
  /* background: #262323; */
  background: #1c1c1c;
  -webkit-box-shadow: 4px -4px 51px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px -4px 51px 3px rgba(0,0,0,0.75);
  box-shadow: 4px -4px 51px 3px rgba(0,0,0,0.75);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.headerAbsolute {
  z-index: 999;
  max-width: 1200px;
  margin: 0 auto;
  /* background: #f3f3f3; */
  /* background: #262323; */
  background: #1c1c1c;
  
  padding: 10px 60px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}

.logoImg {
  width: 100px;
  transition: .5s all ease-in-out;
}

.logoImg:hover {
  filter: contrast(135%);
  transform: scale(1.02);
  transition: .5s all ease-in-out;
}

.logoImgMb {
  display: none;
  width: 50px;
}

.navContent a, #menu a {
  /* color: #e6b329; */
  color: #ffffff;
}

.navContent a::after {
    content: '';
    display: block;
    width: 0;
    margin-top: 2px;
    height: 2px;
    background: #e6b329;
    transition: width .3s;
}

.navContent a:hover::after {
    width: 100%;
}

.navContent {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 40px;
}

#menuToggle {
  display: none;
  position: absolute;
  top: 29px;
  right: 33px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 9999;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span {

  background: #e6e6e6;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  /* gap: 40px;
  position: absolute;
  width: 300px;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 125px;
  right: -100px; */
  display: none;
  gap: 30px;
  justify-items: center;
  align-items: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px;
  background: #1c1c1c;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu.on {
  display: grid;
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

/* And let's fade it in from the left */
#menuToggle input:checked ~ ul {
  transform: none;
  opacity: 1;
}

@media screen and (max-width: 800px) {
  .navContent {
    display: none;
  }

  #menuToggle {
    display: block;
  }

  .logoImg {
    display: none;
  }

  .logoImgMb {
    display: unset;
  }

  .headerAbsolute {
    padding: 10px 20px;
  }
}

@media screen and (max-width: 768px) {
  #menu {
    transform: none;
    opacity: 0;

    transition: opacity 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
}

</style>