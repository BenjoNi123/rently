<template>
  <v-container class="mainContainer" fluid>
    <div class="homeMain">
      <h1>VUE ITEMS CALC</h1>
      <AddItem />
      <ItemsTable />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddItem from "@/components/AddItem.vue";
import ItemsTable from "@/components/ItemsTable.vue";
@Component({ components: { AddItem, ItemsTable } })
export default class Home extends Vue {}
</script>

<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  text-align: center;
}
.homeMain {
  width: 70vw;
}
</style>
