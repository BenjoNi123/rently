<template>
  <v-container class="addItemContainer">
    <v-row>
      <v-form
        class="form"
        ref="form"
        @submit.prevent="addItem()"
        style="display: flex; flex-wrap: wrap; justify-content: space-between"
      >
        <v-text-field
          placeholder="Product Name"
          v-model="item.productName"
        ></v-text-field>
        <v-text-field
          type="number"
          placeholder="Price"
          v-model="item.price"
        ></v-text-field>
        <v-text-field
          type="number"
          placeholder="Quantity"
          v-model="item.quantity"
        ></v-text-field>
        <v-btn type="submit">ADD</v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Product } from "@/store/types";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class AddItem extends Vue {
  item: Product = {
    productName: "",
    price: null,
    quantity: null,
  };

  addItem(): void {
    this.$store.dispatch("addItem", this.item);
    this.item = {
      productName: "",
      price: null,
      quantity: null,
    };
  }
}
</script>

<style scoped>
.addItemContainer {
  padding-bottom: 20px;
}
</style>
