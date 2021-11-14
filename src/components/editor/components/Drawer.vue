<template>
  <v-navigation-drawer width="400" clipped app right>
    <v-card flat tile>
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        dark
        centered
      >
        <v-tab>
          <v-icon left>mdi-grid-large</v-icon>
          Blocks
        </v-tab>

        <v-tab>
          <v-icon>mdi-brush</v-icon>
          Styles
        </v-tab>
        <v-tab>
          <v-icon>mdi-layers-outline</v-icon>
          Layers
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <div class="blocks-container"></div>
        </v-tab-item>
        <v-tab-item>
          <div class="styles-container"></div>
        </v-tab-item>
        <v-tab-item>
          <div class="layers-container"></div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    tab: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
}
</script>
