<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-button @click="clickAssembly" shape="round" color="warning"
      >Начать сборку</ion-button
    >
    <ion-button @click="clickReady" shape="round" color="success"
      >Готово к выдаче</ion-button
    >
    <ion-button @click="clickErr" shape="round" color="danger"
      >Ошибка</ion-button
    >
    <ion-button @click="clickDone" shape="round" color="secondary"
      >Завершить заказ</ion-button
    >
  </div>
</template>

<script>
import Modal from "../components/cellModal";
export default {
  name: "Modal",
  props: {
    title: { type: String, default: "Modal" },
  },
  data() {
    return {};
  },
  methods: {
    clickAssembly() {
      alert("opne");
    },
    clickReady() {
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            data: {},
            propsData: {
              title: "Укажите ячейку",
            },
          },
        })
        .then((m) => m.present());
    },
    clickErr() {
      alert("err");
    },
    clickDone() {
      alert("done");
    },
  },
  mounted() {
    console.log(this.orders);
  },
};
</script>
<style scoped>
ion-button {
  height: 70px;
}
</style>
