<template>

    <div class="aboutUs">

      <h2 class="title">О компании «ART DOM»</h2>

      <p>Компания ТОО Art Dom выражает Вам свою признательность и предлагает рассмотреть предложение о сотрудничестве. Наша компания, специализирующийся на дизайне ритейл пространств и разработке ритейл концептов. Мы занимаемся внедрением комплексных "умных" разработок и автоматизированных инновационных решений, которые превращают торговое оборудование в алгоритмизированные и роботизированные системы, а торговые площади — в магазины будущего. Мы являемся дистрибьютором компании MODERN EXPO (Республика Беларусь) на территории Республики Казахстан.</p>
      <p>Наши продукты разработаны с использованием самых инновационных подходов и усовершенствованы с помощью передовых конструктивных и программных решений.</p>
      <p>Предлагаемый ассортимент продукции ТОО «Art Dom»:  Почтовые терминалы, Стеллажные системы , Кассовые боксы , Холодильное оборудование, Оборудование для самообслуживания, Складские стеллажные системы.</p>

    </div>

</template>

<script>

export default {
  name: 'AboutUs',

  setup() {

    return { }
  }
}
</script>

<style scoped>

.aboutUs {
  padding: 150px 80px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.aboutUs p {
  padding: 10px 0;
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.aboutUs h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

@media screen and (max-width: 883px) {
  .aboutUs .title {
    max-width: 500px;
  }
}

@media screen and (max-width: 800px) {

  .aboutUs {
    padding: 100px 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .aboutUs h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

@media screen and (max-width: 461px) {
  .aboutUs .title {
    max-width: 300px;
  }
}

</style>
