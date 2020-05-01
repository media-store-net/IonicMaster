<template>
  <div>{{status}}</div>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      key: "value",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
