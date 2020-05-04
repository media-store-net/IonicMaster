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
        1: "light", // open
        2: "warning", // start completing
        3: "success", // order complete
        4: "danger", // Error state
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
