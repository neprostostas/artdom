<template>

    <div class="events">

      <h2>Events</h2>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, qui numquam vitae blanditiis sed cupiditate pariatur. Recusandae laboriosam ea cumque dolore officia rerum aspernatur nam, vitae labore necessitatibus fugiat neque iste minus dolorem deserunt in nesciunt aut, fuga ab animi cupiditate quia eaque provident optio. Recusandae reprehenderit accusantium velit rerum consectetur sunt voluptatum voluptatem, qui aperiam veniam cumque optio veritatis mollitia labore quam maxime ullam eligendi magni quaerat repudiandae saepe culpa perspiciatis? Laudantium voluptatum consectetur, corporis voluptate vero ipsa sit doloremque soluta autem facilis hic quae ipsam omnis ipsum alias aspernatur maiores. Itaque optio eveniet ut numquam fuga rem. Nulla.</p>
      <br class="desktop">
      <p class="desktop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum?</p>
      <br>
      <p class="desktop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde doloremque enim pariatur qui ducimus sunt repudiandae cupiditate sit! Vel labore accusamus rerum voluptate nemo obcaecati ab itaque nostrum error, in totam magnam sit praesentium iusto asperiores eligendi harum explicabo enim quidem doloremque dignissimos perspiciatis! Praesentium dolorum itaque quis corporis sapiente inventore, vel magni non. Mollitia fuga adipisci nam autem facilis, omnis distinctio tempora eos velit atque dolorum, hic numquam doloremque eaque incidunt molestiae ipsum pariatur, accusamus architecto! Modi quo maiores eaque numquam error velit et reprehenderit ullam repellat repellendus atque perspiciatis voluptatibus assumenda, officiis recusandae illum neque eveniet laudantium architecto facere, quia iste! Corporis architecto reiciendis, quos voluptate ex consequuntur. Sit quas consequuntur sunt ad vel accusamus ipsam non et enim necessitatibus beatae officia soluta error, quis, voluptate minus. Repudiandae voluptatum voluptatem, velit eius rem nemo explicabo distinctio beatae, dolorem alias soluta maiores laborum sint quis. Repellat, eos voluptatem?</p>

    </div>

</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Events',

  setup() {

    return { }
  }
}
</script>

<style scoped>

.events {
  padding: 120px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.events p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.events h2  {
  padding: 15px 0;
  font-size: 120px;
  line-height: 140px;
  color: #ffffffc2;
}

@media screen and (max-width: 675px) {

  .desktop {
    display: none;
  }

  .events {
    padding: 80px 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .events h2  {
    padding: 15px 0;
    font-size: 50px;
    line-height: 60px;
    color: #ffffffc2;
  }
}

</style>
