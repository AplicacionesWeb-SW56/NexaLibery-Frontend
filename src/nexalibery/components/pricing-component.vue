<script>
export default {
  name: "pricing",
  data() {
    return {
      currentSelected: 0
    }
  },
  methods: {
    getCards(){
      return Array.from(this.$refs.cards.children).filter(element => element.className.includes("pr-card"));
    },
    select(cards){
      cards[this.currentSelected].classList.add("pr-selected")
    },
    removeSelect(cards){
      cards[this.currentSelected].classList.remove("pr-selected")
    },
    selectNext(){
      if(this.currentSelected == 2) return;
      const cards = this.getCards()
      this.removeSelect(cards);
      this.currentSelected += 1;
      this.select(cards);
    },
    selectPrevious(){
      if(this.currentSelected == 0) return;
      const cards = this.getCards()
      this.removeSelect(cards);
      this.currentSelected -= 1;
      this.select(cards);
    }
  },
  mounted() {
    const cards = this.getCards()
    this.select(cards);
  }
}
</script>

<template>
  <div ref="cards" class="pr-cards">
    <pv-button @click="this.selectPrevious" icon="pi pi-arrow-left" class="pr-selector"></pv-button>
    <pv-card class="pr-card">
      <template #title>
        <h2>Premiun</h2>
        <p>$12.99</p>
      </template>
      <template #content>
        <ul>
          <li>Unlimited Access</li>
          <li>No Advertising</li>
          <li>Offline Downloads</li>
          <li>Live Events</li>
          <li>Advanced Communities</li>
        </ul>
        <pv-button>Suscribe Now</pv-button>
      </template>
    </pv-card>


    <pv-card class="pr-card">
      <template #title>
        <h2>Student</h2>
        <p>$9.99</p>
      </template>
      <template #content>
        <ul>
          <li>Premium Educational Content</li>
          <li>Collaboration Tools</li>
          <li>Exclusive Webinars and Tutorials</li>
          <li>Mentoring and Professional Networks</li>
        </ul>
        <pv-button>Suscribe Now</pv-button>
      </template>
    </pv-card>

    <pv-card class="pr-card">
      <template #title>
        <h2>Basic</h2>
        <p>$4.99</p>
      </template>
      <template #content>
        <ul>
          <li>Limited Access</li>
          <li>Advertising Content</li>
          <li>Custom Playlists</li>
          <li>Occasional Access to Premium Content</li>
        </ul>
        <pv-button>Suscribe Now</pv-button>
      </template>
    </pv-card>

    <pv-button @click="this.selectNext" icon="pi pi-arrow-right" class="pr-selector"></pv-button>
  </div>
</template>

<style>
:root {
  --background-card: #223039;
}

.pr-cards {
  display: flex;
  justify-content: space-evenly;
}

.pr-selected {
  animation: pr-selected 0.2s forwards;
}

@keyframes pr-selected {
  100% {
    opacity: 1;
  }
}

.pr-card {
  display: inline-block;
  opacity: 0.4;
  width: 22rem;
  overflow: hidden;
  background-color: var(--background-card);
}

.pr-card * {
  color: #ffffff;
  font-family: "Andada Pro";
  font-weight: 500;
  font-size: 1.5rem;

  margin: 0;
}

.pr-card h2 {
  text-align: center;
  font-size: 1.9rem;
  padding-bottom: 10px;
}

.pr-card p {
  border-bottom: 1px solid white;
}

.pr-card ul {
  margin-block: 2rem;
}

.pr-card li {
  font-size: 1.3rem;
}

.pr-card button {
  margin-inline: 12.5%;
  font-size: 1.3rem;
  background-color: rgba(108, 178, 206, 0.25);
  padding: 20px 50px;
  border-style: none;
  border-radius: 25px;
}

.pr-selector {
  padding-inline: 3rem;
  background-color: white;
  border: none;
  color: black;
}

.pr-selector:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.pr-selector span {
  font-size: 2rem;
}
</style>