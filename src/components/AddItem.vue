<template>
  <div>
    <label for="input">Product Name</label>
    <input type="text" />
    <label for="input">Price</label>
    <input type="text" />
    <label for="input">Quantity</label>
    <input type="text" />
    <button>ADD</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class AddItem extends Vue {}
</script>

<style></style>
