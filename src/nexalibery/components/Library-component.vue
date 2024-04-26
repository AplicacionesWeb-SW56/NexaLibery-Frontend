<template>
  <div class="library">
    <h2>Most viewed books</h2>
    <div class="most-viewed-books">
      <div v-for="book in mostViewedBooks" :key="book.id" class="book">
        <h3>{{ book.title }}</h3>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p>{{ book.shortDescription }}</p>
      </div>
    </div>
    <p-button @click="loadMoreMostViewed" label="Load More" icon="pi pi-ellipsis-h" iconPos="right"></p-button>

    <h2>Recommendations for you</h2>
    <div class="recommended-books">
      <div v-for="book in recommendedBooks" :key="book.id" class="book">
        <h3>{{ book.title }}</h3>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p>{{ book.shortDescription }}</p>
      </div>
    </div>
    <p-button @click="loadMoreRecommended" label="Load More" icon="pi pi-ellipsis-h" iconPos="right"></p-button>
  </div>
</template>

<script>
import { Button } from 'primevue/button';

export default {
  components: {
    PButton: Button,
  },
  data() {
    return {
      mostViewedBooks: [

        {
          id: 1,
          title: 'El Código da Vinci',
          author: 'Dan Brown',
          shortDescription: 'El libro El código Da Vinci de Dan Brown es considerado por muchos, un libro blasfemo, causó una gran controversia en sus lectores cuando lo leyeron por primera vez, lleno de misticismo, ocultismo e historia llamativa lo convirtieron en un bestseller en su momento.',
        },
        {
          id: 2,
          title: 'El señor de los anillos',
          author: 'J.R.R. Tolkien',
          shortDescription: 'El Señor de los anillos es una novela ganadora de muchos premios, una joya literaria sin duda alguna. En esta ocasión traemos para ti una versión conmemorativa a causa del centenario de su autor.',
        },
        {
          id: 3,
          title: 'El Principito',
          author: 'Antoine de Saint-Exupéry',
          shortDescription: 'El Principito es la obra consagratoria del autor Saint Exupery, quien fuese piloto de avión es sus tiempos de vida, fue la última que escribió, y lo hizo un año antes de morir en una misión postguerra.',
        }
      ],
      recommendedBooks: [
        {
          id: 1,
          title: 'Don Quijote de la Mancha',
          author: 'Miguel de Cervantes',
          shortDescription: 'Don Quijote de la Mancha de Miguel de Cervantes es uno de los clásicos más leídos de la literatura occidental. Originalmente concebido como una parodia de los romances caballerescos que habían estado en boga literaria durante mucho tiempo, describe de manera realista lo que le sucede a un caballero anciano que, confundido por la lectura de tales romances, se embarca en su viejo caballo Rocinante, con su escudero pragmático, Sancho Panza, para buscar la aventura.',
        },
        {
          id: 2,
          title: 'El diario de Ana Frank',
          author: 'Ana Frank',
          shortDescription: 'Ana Frank fue una joven judía, que en el año de 1942 juntamente con sus padres trato de sobrevivir al holocausto, sin embargo no fue posible, ya que al ser capturada en el año de 1944 fueron llevados al campo de concentración, lugar donde tuvo origen su diario, y posteriormente murió en 1945. Cabe destacar que esta edición es la más ampliada de todas las versiones disponibles.',
        },
        {
          id: 3,
          title: 'El Alquimista',
          author: 'Paulo Coelho',
          shortDescription: 'Esta obra maestra de Paulo Coelho nos muestra que el poder para alcanzar nuestros propios sueños, está en el interior del alma, solamente debemos escuchar nuestro corazón y seguir por ellos hasta el final, aunque parezca imposible de lograr nunca es demasiado tarde para soñar.',
        }
      ],
    };
  },
  methods: {
    loadMoreMostViewed() {

    },
    loadMoreRecommended() {

    },
  },
};
</script>

<style scoped>
.library {

}
.most-viewed-books,
.recommended-books {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.book {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  width: calc(33% - 1rem);
}
</style>
