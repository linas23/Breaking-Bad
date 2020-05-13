<template>
  <div>
    <v-container>
      <v-row align="center" class="d-flex flex-md-row justify-space-around" id="main">
        <div class="display-4 font-weight-bold mx-12 mx-sm-0">
          Are you
          <v-spacer></v-spacer>
          <span class="warning--text">Breaking</span>
          <span class="red--text darken-3">Bad ?</span>
        </div>
        <div>
          <v-hover v-slot:default="{ hover }">
            <v-img :src="random.img" position="top" width="350" contain id="image">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex justify-center align-center transition-fast-in-fast-out v-card--reveal display-2 red--text"
                  style="height: 100%;"
                >{{random.name}}</div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </div>
      </v-row>
    </v-container>

    <v-container class="warning lighten-1 red--text my-12">
      <v-carousel
        cycle
        hide-delimiters
        interval="3333"
        progress
        height="400"
        show-arrows-on-hover
        class
      >
        <v-carousel-item
          v-for="(slide,i) in quotes"
          :key="i"
          reverse-transition="scroll-x-transition"
          transition="scroll-x-transition"
        >
          <v-row class="fill-height d-flex flex-column" align="center" justify="center">
            <div class="display-1">{{slide.quote}}</div>
            <br />
            <div class="title">{{slide.author}}</div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container>
      <p class="text-center title">
        <span class="display-2 warning--text font-weight-bold">Breaking</span>
        <span class="display-2 red--text font-weight-bold">Bad</span> trivia
      </p>
      <v-row class="warning--text">
        <v-col cols="12" sm="4" v-for="(trivia,index) in trivias" :key="index">
          <v-card hover class="brbd">
            <div class="front warning--text">
              <p class="display-1" style="margin:0;">{{trivia.title}}</p>
              <v-icon x-large color="warning">{{trivia.icon}}</v-icon>
              <p class="headline mt-3">{{trivia.number}}</p>
            </div>
            <div class="back">
              <v-img
                src="https://i.imgur.com/lxD4SmBg.jpg"
                max-height="30vh"
                cover
                position="center"
              ></v-img>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <p class="text-center" style="margin:5vh;">
        <v-btn class="warning red--text" to="/characters">Let's get to the characters</v-btn>
      </p>
    </v-container>
  </div>
</template>

<script>
// https://www.breakingbadapi.com/api/
export default {
  data() {
    return {
      trivias: [
        {
          title: "Characters",
          icon: "mdi-hat-fedora",
          number: "63"
        },
        {
          title: "Episodes",
          icon: "mdi-movie",
          number: "102"
        },
        {
          title: "Death Count",
          icon: "mdi-ambulance",
          number: "271"
        }
      ]
    };
  },
  async asyncData({ $axios }) {
    try {
      let res = await $axios.$get(
        "https://www.breakingbadapi.com/api/character/random"
      );
      let quotes = await $axios.$get(
        "https://www.breakingbadapi.com/api/quotes"
      );
      quotes = quotes
        .sort(() => {
          return 0.5 - Math.random();
        })
        .slice(0, 12);
      return { random: res[0], quotes };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style>
.v-card--reveal {
  opacity: 0.5;
  background: white;
}
#main {
  height: 90vh;
}
#image {
  overflow: hidden;
}
.brbd {
  height: 30vh;
  width: 100%;
  perspective: 1000px;
  transition: all 1s;
  transform-style: preserve-3d;
}
.front,
.back {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}
.front {
  background: rgb(240, 56, 56);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.brbd:hover {
  transform: rotateY(180deg);
}
.back {
  transform: rotateY(180deg);
}
</style>