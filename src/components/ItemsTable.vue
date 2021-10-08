<template>
  <v-container>
    <table class="table">
      <tr>
        <th>Selected</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      <tr v-if="tableData.length == 0">
        <h1 style="text-align: center">Your Cart is empty</h1>
      </tr>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            :value="index"
            v-model="selected"
          />
        </td>
        <td>{{ item.productName }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.quantity }}</td>
      </tr>
    </table>
    <div style="display: flex; justify-content: space-between">
      <v-btn :disabled="disableDelete" small @click="deleteData()"
        >Delete Selected</v-btn
      >
      <p>Total:{{ this.total }}</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Product } from "@/store/types";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ItemsTable extends Vue {
  selected = [];
  get tableData(): Array<Product> {
    return this.$store.state.items;
  }
  get total(): number {
    return this.$store.getters.getTotal;
  }
  deleteData(): void {
    this.$store.dispatch("deleteItems", this.selected);
    this.selected = [];
  }
  get disableDelete(): boolean {
    if (this.selected.length == 0) {
      return true;
    } else return false;
  }
}
</script>

<style>
.table {
  width: 100%;
  border: 1px black solid;
  text-align: left;
}
</style>
