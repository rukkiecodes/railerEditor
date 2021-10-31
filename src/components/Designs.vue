<template>
  <v-container fluid :class="designGrid" class="template pa-4">
    <AppBar />
    <v-hover v-for="(template, i) in templates" :key="i" v-slot="{ hover }">
      <v-card class="card mb-6 mb-sm-4 rounded-lg" color="white">
        <v-img :src="'http://localhost:3000' + template.image">
          <v-fade-transition>
            <v-card
              v-if="hover"
              style="height: 100%;"
              class="pa-3 transition-fast-in-fast-out v-card--reveal"
            >
              <v-btn
                dark
                small
                block
                depressed
                class="text-capitalize"
                color="deep-purple accent-4"
              >
                Get started
              </v-btn>
              <v-btn
                dark
                small
                block
                depressed
                color="grey darken-4"
                class="mt-3 text-capitalize"
              >
                Preview
              </v-btn>
            </v-card>
          </v-fade-transition>
        </v-img>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import AppBar from "../components/appComponents/AppBar.vue"
import { mapActions, mapGetters } from "vuex"
export default {
  components: {
    AppBar
  },
  mounted() {
    this.$nextTick(() => {
      this.getDesigns()
      this.getProfile()
    })
  },

  methods: {
    ...mapActions(["getDesigns", "getProfile"]),
  },

  computed: {
    ...mapGetters(["templates"]),
    designGrid() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "cardsMobile"
        case "sm":
          return "cardsTab"
        case "md":
          return "cardsIpadPro"
        case "lg":
          return "cardsLargeScreens"
        case "xl":
          return "cardsExtraLargeScreens"
      }
    },
  },
}
</script>

<style scoped>
.cards {
  width: 100%;
  column-count: 6;
  column-gap: 1;
}

.cardsMobile {
  width: 100%;
  column-count: 1;
  column-gap: 1;
}

.cardsTab {
  width: 100%;
  column-count: 4;
  column-gap: 1;
}

.cardsIpadPro {
  width: 100%;
  column-count: 4;
  column-gap: 1;
}

.cardsLargeScreens {
  width: 100%;
  column-count: 7;
  column-gap: 1;
}

.cardsExtraLargeScreens {
  width: 100%;
  column-count: 8;
  column-gap: 1;
}

.card {
  width: 100%;
  height: auto;
  break-inside: avoid;
  position: relative;
}

.v-card--reveal {
  bottom: 0;
  position: absolute;
  width: 100%;
}
</style>
