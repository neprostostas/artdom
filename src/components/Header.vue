<template>
    <header>

      <div class="headerWrapper">
        <div class="headerAbsolute">

          <div class="logoWrapper">
            <router-link to="/main">
              Лого
            </router-link>
          </div>

          <nav role='navigation'>

            <div class="navContent">
              <router-link to="/products">Продукти</router-link>
              <router-link to="/cases">Кейси</router-link>
              <router-link to="/about-us">Про нас</router-link>
              <router-link to="/contacts">Контакти</router-link>
              <router-link to="/events">Події</router-link>
            </div>

            <div @click="staticBody" id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <router-link to="/products">Продукти</router-link>
                <router-link to="/cases">Кейси</router-link>
                <router-link to="/about-us">Про нас</router-link>
                <router-link to="/contacts">Контакти</router-link>
                <router-link to="/events">Події</router-link>
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
  }

    return {
      staticBody
    }
  }
}
</script>

<style>

.headerWrapper {
  /* background: #f3f3f3; */
  background: #ffffff;
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
  background: #ffffff;
  padding: 40px 60px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
}

.navContent a, #menu a {
  color: #000000;
}

.navContent a::after {
    content: '';
    display: block;
    width: 0;
    margin-top: 2px;
    height: 2px;
    background: #000;
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
  top: 40px;
  right: 50px;
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
  z-index: 2;
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
  display: grid;
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
  background: #fff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
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
}

@media screen and (max-width: 768px) {
  #menu {
    transform: none;
    opacity: 0;

    transition: opacity 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
}

</style>