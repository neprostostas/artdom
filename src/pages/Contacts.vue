<template>

    <div class="contacts">

      <h2>Контакты</h2>

      <p>С уважением и наилучшими пожеланиями, <br>
          ВАШ «ART DOM» <br>
          Mob/tel: +7 777 491 98 36 <br>
          Email: artdom1904@gmail.com
      </p>

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
