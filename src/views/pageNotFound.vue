<template>
  <v-container class="py-0">
    <v-sheet
      color="transparent"
      class="d-flex justify-center align-center"
      height="100vh"
    >
      <v-card flat width="400" color="transparent">
        <v-card-title
          class="d-flex justify-center align-center text-h3 deep-purple--text text--accent-4"
          >Whoops, 404</v-card-title
        >
        <v-card-text class="text-center text-body-1"
          >The page you were looking for does not exists</v-card-text
        >
        <v-card-actions>
          <v-btn
            depressed
            large
            to="/dashboard/template"
            class="mx-auto"
            color="deep-purple accent-4"
            >Get me out of here!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-sheet>
  </v-container>
</template>
