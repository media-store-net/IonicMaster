<template>
  <modal name="modalStatus" :height="370" :width="570">
    <div>
      <ion-header>
        <ion-toolbar>
          <ion-title class="modalTitle">Выбирите действие!!!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-col>
        <ion-button @click="clickAssembly" shape="round" color="warning"
          >Начать сборку</ion-button
        >
        <ion-button @click="clickReady" shape="round" color="secondary"
          >Готово к выдаче</ion-button
        >
        <ion-button @click="clickErr" shape="round" color="danger"
          >Ошибка</ion-button
        >
        <ion-button @click="clickDone" shape="round" color="success"
          >Завершить заказ</ion-button
        >
      </ion-col>
    </div>
  </modal>
</template>

<script>
import api from "../API/api";

export default {
  name: "modalStatus",
  props: {
    order: {},
  },
  data() {
    return {};
  },
  methods: {
    beforeOpen(event) {
      console.log(event.params.foo);
    },
    clickAssembly() {
      const self = this;
      let orderId = self.order.orderId;
      self.order.status = 2;
      api
        .clickAssembly(self.order.status, orderId)
        .then((res) => {
          const isErrors = res.data.isErrors;
          if (!isErrors) {
            self.$modal.hide("modalStatus");
            console.log(res.data);
          }
        })
        .catch((error) => console.log(error));
    },
    clickReady() {},
    clickErr() {
      alert("err");
    },
    clickDone() {
      alert("done");
    },
  },
  mounted() {},
};
</script>

<style>
.modalTitle {
  color: red;
}
ion-button {
  height: 70px;
  width: 90%;
}
.vm--modal {
  border-radius: 30px;
}
</style>
