import Vue from "vue";

export const eventBus = new Vue({
  state: {},
  methods: {
    onStatusChange(order) {
      this.$emit("statusChanged", order);
    },
  },
});
