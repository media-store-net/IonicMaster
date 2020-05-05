<template>
  <modal
    name="modalStatus"
    @before-open="beforeOpen"
    :height="370"
    :width="570"
  >
    <div>
      <ion-header>
        <ion-toolbar>
          <ion-title class="modalTitle">Выбирите действие!!!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-col>
        <ion-button
          id="assembly"
          @click="clickStatus"
          shape="round"
          color="warning"
          >Начать сборку</ion-button
        >
        <ion-button
          id="done"
          @click="clickStatus"
          shape="round"
          color="secondary"
          >Готово к выдаче</ion-button
        >
        <ion-button id="err" @click="clickStatus" shape="round" color="danger"
          >Ошибка</ion-button
        >
        <ion-button
          id="close"
          @click="clickStatus"
          shape="round"
          color="success"
          >Завершить заказ</ion-button
        >
      </ion-col>
    </div>
  </modal>
</template>

<script>
import api from "../API/api";
import { eventBus } from "../eventBus";

export default {
  name: "modalStatus",

  data() {
    return {
      order: {},
    };
  },
  methods: {
    beforeOpen(event) {
      this.order = event.params.order;
    },
    updateStatus() {
      eventBus.onStatusChange(this.order);
    },
    clickStatus(event) {
      //const self = this;
      let orderId = this.order.orderId;
      if (event.target.id == "assembly") {
        this.order.status = 1;
        api
          .clickAssembly(this.order.status, orderId)
          .then((res) => {
            const isErrors = res.data.isErrors;
            if (!isErrors) {
              this.$modal.hide("modalStatus");
              //console.log(res.data);
            }
          })
          .catch((error) => console.log(error));
      } else if (event.target.id == "done") {
        this.order.status = 2;
        api
          .clickAssembly(this.order.status, orderId)
          .then((res) => {
            const isErrors = res.data.isErrors;
            if (!isErrors) {
              this.$modal.hide("modalStatus");
              //console.log(res.data);
            }
          })
          .catch((error) => console.log(error));
      } else if (event.target.id == "err") {
        this.order.status = 3;
        api
          .clickAssembly(this.order.status, orderId)
          .then((res) => {
            const isErrors = res.data.isErrors;
            if (!isErrors) {
              this.$modal.hide("modalStatus");
              //console.log(res.data);
            }
          })
          .catch((error) => console.log(error));
      } else {
        this.order.status = 4;
        api
          .clickAssembly(this.order.status, orderId)
          .then((res) => {
            const isErrors = res.data.isErrors;
            if (!isErrors) {
              this.$modal.hide("modalStatus");
              //console.log(res.data);
            }
          })
          .catch((error) => console.log(error));
      }
    },
  },
  watch: {
    order: {
      handler: function() {
        this.updateStatus();
      },
      deep: true,
    },
  },
  mounted() {
    /* EventBus.$on("order", (order) => {
      this.order = order;
    }); */
  },
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
