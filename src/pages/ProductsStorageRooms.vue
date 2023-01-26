<template>

    <div class="products">

      <h2>Камеры хранения</h2>

      <p class="text">Автоматизированное решение</p>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms1.png" alt="storage-rooms1">
        </div>
      </div>
      
      <p class="text">Модульная конструкция, безопасное хранение и дистанционное управление позволяют установить автоматизированную камеру хранения в любом, удобном для пользователя, месте.</p>

      <ul class="list-storage">
        <li>Автоматизированный пункт хранения с простой системой штрих-кодов</li>
        <li>Надежный конструктив и высококачественные материалы гарантируют безопасность хранения</li>
        <li>Электромеханический замок, который открывается с помощью штрих-кода. <br> Если штрих-код был потерян, нет необходимости заменять замки, их можно открыть с помощью программного обеспечения</li>
        <li>Интерактивный дешборд в программе для администратора позволяет легко контролировать и управлять оборудованием</li>
        <li>Опционально может быть установлено устройство для оплаты</li>
      </ul>

      <p class="text pt-40">Технические характеристики</p>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms2.png" alt="storage-rooms2">
        </div>
      </div>

      <p class="text pt-40">Компоненты</p>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms3.png" alt="storage-rooms3">
        </div>
      </div>

      <p class="text pt-40">Модельный ряд</p>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms4.png" alt="storage-rooms4">
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms5.png" alt="storage-rooms5">
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms6.png" alt="storage-rooms6">
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms7.png" alt="storage-rooms7">
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms8.png" alt="storage-rooms8">
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-rooms9.png" alt="storage-rooms9">
        </div>
      </div>


    </div>
    
  </template>

<script>

import {onBeforeMount} from "vue";

export default {
  name: 'Products',

  setup() {

    onBeforeMount(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    })

    return { }
  }
}
</script>

<style scoped>

.imageGroupOne {
  padding: 20px 0;
}

.imageGroupOne img {
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
}

.products {
  padding: 120px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.products p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.products h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

.text {
  font-size: 1.5rem!important;
  padding: 0 0 20px;
}

.list-storage {
  color: rgba(213, 201, 201, 0.69);

  padding-left: 15px;
  list-style: unset;
}

.list-storage li {
  font-size: 1.2rem;
  line-height: 1.6em;
}

.pt-40 {
  padding-top: 40px;
}

@media screen and (max-width: 800px) {

  .products {
    padding: 80px 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .products h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

</style>
