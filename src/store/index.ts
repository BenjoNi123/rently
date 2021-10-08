import Vue from "vue";
import Vuex from "vuex";
import { Product } from "@/store/types";

Vue.use(Vuex);

/* export interface RentlyStore {
  state: Pro | undefined;
} */
/* export interface RentlyState {
  items: Product[];
} */

export default new Vuex.Store({
  state: {
    items: [] as Product[],
  },
  actions: {
    addItem(context, data) {
      context.commit("ADD_ITEM", data);
      context.commit("SAVE_STATE");
    },
    getState(context) {
      context.commit("SET_STATE", localStorage.getItem("ShoppingCart"));
    },
    deleteItems(context, data) {
      context.commit("DELETE_ITEMS", data);
      context.commit("SAVE_STATE");
    },
  },
  mutations: {
    ADD_ITEM(state, data: Product) {
      state.items.push(data);
    },
    DELETE_ITEMS(state, data) {
      for (let i = data.length - 1; i >= 0; i--) {
        state.items.splice(data[i], 1);
      }
    },
    SAVE_STATE(state) {
      localStorage.setItem("ShoppingCart", JSON.stringify(state.items));
    },
    SET_STATE(state, data) {
      const items = JSON.parse(data);
      state.items.push(...items);
    },
  },
  getters: {
    getTotal(state) {
      const allProducts = state.items;
      let result = 0;
      for (const item of allProducts) {
        if (item.price == null) {
          item.price = 0;
        }
        if (item.quantity == null) {
          item.quantity = 0;
        }
        result += item.price * item.quantity;
      }
      return result;
    },
  },
  modules: {},
});
