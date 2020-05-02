<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-button @click="startAssembly" color="warning"
      >Начать сборку</ion-button
    >
    <ion-button @click="ReadyForExtradition" color="success"
      >Готово к выдаче</ion-button
    >
    <ion-button @click="clickErr" color="danger">Ошибка</ion-button>
    <ion-button @click="clickDone" color="secondary"
      >Завершить заказ</ion-button
    >
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: { type: String, default: "Modal" },
  },
  data() {
    return {};
  },
  methods: {
    startAssembly() {
      alert("opne");
    },
    ReadyForExtradition() {
      alert("assembly");
    },
    clickErr() {
      alert("err");
    },
    clickDone() {
      alert("done");
    },
  },
};
</script>
<style scoped>
ion-button {
  height: 70px;
}
</style>
