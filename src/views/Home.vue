<template>
  <div class="home">
    <AddItem />
    <ItemsTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddItem from "@/components/AddItem.vue";
import ItemsTable from "@/components/ItemsTable.vue";

@Component({
  components: {
    AddItem,
    ItemsTable,
  },
})
export default class Home extends Vue {}
</script>
