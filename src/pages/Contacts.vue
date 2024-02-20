<template>

    <div class="contacts">

      <h2>Контакты</h2>

      <p>С уважением и наилучшими пожеланиями, <br>
          ВАШ «ART DOM» <br>
          Mob/tel: +7 778 788 36 41<br>
          Email: artdom1904@gmail.com
      </p>

      <h3 class="about-us">О компании «ART DOM»</h3>

      <p class="about-p">Компания ТОО Art Dom выражает Вам свою признательность и предлагает рассмотреть предложение о сотрудничестве. Наша компания, специализирующийся на дизайне ритейл пространств и разработке ритейл концептов. Мы занимаемся внедрением комплексных "умных" разработок и автоматизированных инновационных решений, которые превращают торговое оборудование в алгоритмизированные и роботизированные системы, а торговые площади — в магазины будущего. Мы являемся дистрибьютором компании MODERN EXPO (Республика Беларусь) на территории Республики Казахстан.</p>
      <p class="about-p">Наши продукты разработаны с использованием самых инновационных подходов и усовершенствованы с помощью передовых конструктивных и программных решений.</p>
      <p class="about-p">Предлагаемый ассортимент продукции ТОО «Art Dom»:  Почтовые терминалы, Стеллажные системы , Кассовые боксы , Холодильное оборудование, Оборудование для самообслуживания, Складские стеллажные системы.</p>

    </div>

</template>

<script>

export default {
  name: 'Contacts',

  setup() {

    return { }
  }
}
</script>

<style scoped>
.contacts {
  padding: 150px 80px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.contacts p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.contacts h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

.about-us {
  padding: 40px 0 20px;
  font-size: 30px;
  color: #ffffffc2;
}

.about-p {
  padding: 10px 0;
}

@media screen and (max-width: 800px) {

  .contacts {
    padding: 100px 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contacts h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

</style>
