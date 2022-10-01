<template>

    <div class="products">

      <h2>Ассортимент</h2>

      <div class="block first">
        <h3>Почтовые терминалы</h3>
        <div class="imageGroupTwo">
          <img src="../../src/assets/img/post1.jpg" alt="post1">
          <img src="../../src/assets/img/post2.jpg" alt="post2">
        </div>
        <p>РЕШЕНИЕ ДЛЯ ДОСТАВКИ В СЕКТОРАХ РОЗНИЧНОЙ ТОРГОВЛИ И ЛОГИСТИКИ - это часть современной экосистемы доставки от ТОО «Art Dom», объединяющей полноразмерные многофункциональные почтовые терминалы с широким спектром возможностей использования.</p>
      </div>

      <div class="block">
        <h3>Стеллажные cистемы</h3>
        <div class="imageGroupTwo">
          <img src="../../src/assets/img/stelage1.jpg" alt="stelage1">
          <img src="../../src/assets/img/stelage2.jpg" alt="stelage2">
        </div>
        <p>Беспрецедентный bestseller и надежная основа нашего продуктового ассортимента - стеллажные системы в самых разнообразных их вариациях. Мы объединили лучшие мировые тенденции ритейла с собственным опытом изготовления и реализации оборудования и получили самые современные решения, удовлетворяющие всем актуальным рыночным тенденциям. Модульный дизайн систем позволяет адаптировать их к любым условиям продаж, а широкий спектр аксессуарных дополнений и возможных комбинаций позволяет превратить базовые конструкции систем на индивидуальные решения именно для вашего пространства.</p>
      </div>

      <div class="block">
        <h3>Кассовые боксы</h3>
        <div class="imageGroupTwo">
          <img src="../../src/assets/img/box1.jpg" alt="box1">
          <img src="../../src/assets/img/box2.jpg" alt="box2">
        </div>
        <p>Современные покупатели в значительной степени ориентируются на опыт и желают качественного и быстрого обслуживания. Эти факторы приводят к основательным изменениям в имидже классических магазинов. Трансформация торговой площади требует эволюции оборудования и методов оплаты, внедрения новых концептов и программных средств.Кассовые боксы EVO CELINE созданы, чтобы удовлетворить ожидания самых требовательных клиентов, гарантируя скорость, удобство и персонализацию покупательского опыта.</p>
      </div>

      <div class="block">
        <h3>Холодильное оборудование</h3>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/fridge1.jpg" alt="fridge1">
        </div>
        <p>Современные и экологически безопасные вертикальные многоярусные витрины COOLES DECK, отвечающие последним тенденциям рынка, а также требованиям ЕС по энергоэффективности, Подходят для всех типов магазинов.</p>
      </div>

      <div class="block">
        <h3>Оборудование для самообслуживания</h3>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/self1.jpg" alt="self1">
        </div>
        <p>Самообслуживание и создание новых возможностей с помощью цифровых технологий - приоритетные направления совершенствования современного ритейла. Кассы самообслуживания SELINE OT Modern Expo предоставляют покупателям удобные и эффективные инструменты для совершения покупок и улучшают качество покупок с помощью цифровых технологий.</p>
      </div>

      <div class="block">
        <h3>Складские cтеллажные cистемы</h3>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage1.jpg" alt="storage1">
        </div>
        <p>Мы предлагаем безопасные, эффективные, модульные СКЛАДСКИЕ СТЕЛЛАЖИ для розничной торговли, производства, фулфилмент-центров, дарксторов, фармацевтических компаний, электронной коммерции, почтовых и курьерских служб.</p>
      </div>

    </div>

</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Products',

  setup() {

    return { }
  }
}
</script>

<style scoped>

.block.first {
  margin: 20px 0;
}

.block {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 10px 20px;
  margin: 40px 0;
  transition: .5s all ease-in-out;
}

.block:hover {
  cursor: pointer;
  transition: .5s all ease-in-out;
  -webkit-box-shadow: -1px 3px 22px -11px rgba(255,255,255,1);
  -moz-box-shadow: -1px 3px 22px -11px rgba(255,255,255,1);
  box-shadow: -1px 3px 22px -11px rgba(255,255,255,1);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.block h3 {
  padding: 20px 0 30px;
  font-weight: 300;
  font-size: 26px;
  line-height: 22px;
  color: #e6b329;
}

.block p {
  padding: 25px 0 10px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffffc2;
}

.imageGroupOne {
  display: grid;
}

.imageGroupTwo {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 15px;
}

.imageGroupOne img {
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
}

.imageGroupTwo img {
  cursor: pointer;
  max-width: 100%;
  width: 500px;
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
