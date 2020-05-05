<template>
  <div>
    <ion-icon
      name="radio-button-on-outline"
      :color="statusColor[status]"
    ></ion-icon>
  </div>
</template>

<script>
import { radioButtonOnOutline } from "ionicons/icons";
import { addIcons } from "ionicons";

addIcons({
  "ios-radio-button-on-outline": radioButtonOnOutline,
  "md-radio-button-on-outline": radioButtonOnOutline,
});

export default {
  props: {
    status: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      statusColor: {
        0: "light", // open
        1: "warning", // start completing
        2: "success", // order complete
        3: "danger", // Error state
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="css" scoped>
  ion-icon {
    color: aliceblue;
    border: 1px solid black;
    border-radius: 50%;
  }
</style>
