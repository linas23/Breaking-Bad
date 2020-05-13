<template>
  <div>
    <div class="display-2 text-center ma-7">
      <span class="warning--text">Breaking</span>
      <span class="red--text">Bad</span>
    </div>
    <div class="windows">
      <v-row class="bb">
        <v-col cols="12" sm="2" sm-offset="1">
          <v-item-group v-model="window" mandatory>
            <v-item
              v-for="character in characters"
              :key="character.id"
              v-slot:default="{active,toggle}"
              class="my-2"
            >
              <div>
                <v-card
                  class="warning--text title pl-2"
                  flat
                  hover
                  :input-value="active"
                  @click="toggle"
                >{{character.name}}</v-card>
              </div>
            </v-item>
          </v-item-group>
        </v-col>
        <v-col cols="12" md="8">
          <v-window v-model="window" class="stickIt" horizontal show-arrows>
            <v-window-item eager v-for="character in characters" :key="character.id">
              <v-card class="px-5 red--text">
                <v-img :src="character.img" height="400" contain></v-img>
                <v-card-title class="display-1">{{character.name}}</v-card-title>
                <v-card-text class="headline red--text">
                  <p>DOB : {{character.birthday}}</p>
                  <p>Nickname : {{character.nickname}}</p>
                  <p>Occupation: {{character.occupation.join(", ")}}</p>
                  <p>Appearance in Season: {{character.appearance.join(", ")}}</p>
                  <p>Status: {{character.status}}</p>
                  <p>Portrayed By: {{character.portrayed}}</p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    window: 0
  }),
  async asyncData({ $axios }) {
    let results = await $axios.$get(
      "https://www.breakingbadapi.com/api/characters"
    );
    console.log(results);
    return { characters: [...results] };
  }
};
</script>

<style lang="scss">
.stickIt {
  position: sticky;
  top: 100px;
  right: 0;
}
.bb {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 1000px) {
  .bb {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>