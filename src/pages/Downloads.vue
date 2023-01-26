<template>

  <div class="downloads">

    <h2>Скачать</h2>

    <p class="pb-40">Наши Каталоги</p>

    <div class="wrapper-catalog">
      <template v-for="(file, ind) in catalog" :key="ind">
        <button class="catalog-button" @click="downloadFile(file.title, file.link)">{{file.title}}</button>
      </template>
    </div>

  </div>

  <Loader v-if="loader" />

</template>

<script>
import axios from "axios";
import Loader from "@/components/base/Loader.vue";
import {ref} from "vue";

export default {
  name: 'Downloads',
  components: {Loader},

  setup() {

    const loader = ref(false)

    const catalog = [
      {title: "Кассовые зоны", link: "https://res.cloudinary.com/dhmgbmdm7/raw/upload/v1674750553/ARTDOM%20%7C%20%D0%9A%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%B7%D0%BE%D0%BD%D1%8B.pptx"},
      {title: "Стеллажи", link: "https://res.cloudinary.com/dhmgbmdm7/raw/upload/v1674750552/ARTDOM%20%7C%20%D0%A1%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6%D0%B8.pptx"},
      {title: "Холодильное оборудование", link: "https://res.cloudinary.com/dhmgbmdm7/raw/upload/v1674750553/ARTDOM%20%7C%20%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.pptx"},
    ]

    async function downloadFile(title, l) {
      loader.value = true;
      try {
        const response = await axios.get(l, {
          responseType: 'blob',
        });
        const data = response.data;
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        const name = title + '.pptx';
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        loader.value = false;
      } catch (error) {
        console.error(error);
        loader.value = false;
      }
      loader.value = false;
    }

    return { downloadFile, catalog, loader }
  }
}
</script>

<style scoped>

.pb-40 {
  padding-bottom: 40px;
}

.wrapper-catalog {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
}

.catalog-button {
  padding: 15px 5px;
  font-size: 20px;
  text-align: center;
  border: none;
  color: #fff;
  background: #f1bf3c;
  border-radius: 6px;
  transition: .2s all ease-in-out;
}

.catalog-button:hover {
  transition: .2s all ease-in-out;
  color: #f1bf3c;
  background: #1c1c1c;
}

.downloads {
  padding: 150px 80px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.downloads p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.downloads h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

@media screen and (max-width: 1100px) {

  .wrapper-catalog {
    grid-template-columns: repeat(2, auto);
  }

  .catalog-button:last-child {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  }

}

@media screen and (max-width: 800px) {

  .wrapper-catalog {
    grid-template-columns: auto;
    justify-content: start;
  }

  .catalog-button:last-child {
    grid-row-start: unset;
    grid-row-end: unset;
    grid-column-start: unset;
    grid-column-end: unset;
  }

  .catalog-button {
    padding: 15px 40px;
  }

  .downloads {
    padding: 100px 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .downloads h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

</style>
