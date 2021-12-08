<template>
  <v-dialog v-model="editor.sendDialog" scrollable width="800px" persistent>
    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos
        dolorem repellat? Similique aliquid adipisci ipsa dicta facere
        temporibus, quae accusantium quam ratione eveniet quidem error non iusto
        odit sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora eos dolorem repellat? Similique aliquid adipisci ipsa dicta
        facere temporibus, quae accusantium quam ratione eveniet quidem error
        non iusto odit sequi? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempora eos dolorem repellat? Similique aliquid adipisci ipsa
        dicta facere temporibus, quae accusantium quam ratione eveniet quidem
        error non iusto odit sequi? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempora eos dolorem repellat? Similique aliquid
        adipisci ipsa dicta facere temporibus, quae accusantium quam ratione
        eveniet quidem error non iusto odit sequi? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tempora eos dolorem repellat? Similique
        aliquid adipisci ipsa dicta facere temporibus, quae accusantium quam
        ratione eveniet quidem error non iusto odit sequi? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Tempora eos dolorem repellat?
        Similique aliquid adipisci ipsa dicta facere temporibus, quae
        accusantium quam ratione eveniet quidem error non iusto odit sequi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos
        dolorem repellat? Similique aliquid adipisci ipsa dicta facere
        temporibus, quae accusantium quam ratione eveniet quidem error non iusto
        odit sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora eos dolorem repellat? Similique aliquid adipisci ipsa dicta
        facere temporibus, quae accusantium quam ratione eveniet quidem error
        non iusto odit sequi? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempora eos dolorem repellat? Similique aliquid adipisci ipsa
        dicta facere temporibus, quae accusantium quam ratione eveniet quidem
        error non iusto odit sequi? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempora eos dolorem repellat? Similique aliquid
        adipisci ipsa dicta facere temporibus, quae accusantium quam ratione
        eveniet quidem error non iusto odit sequi? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tempora eos dolorem repellat? Similique
        aliquid adipisci ipsa dicta facere temporibus, quae accusantium quam
        ratione eveniet quidem error non iusto odit sequi?
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="editor.sendDialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="editor.sendDialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["editor"]),
  },
}
</script>
