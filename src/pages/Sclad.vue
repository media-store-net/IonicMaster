<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Склад - Заказы</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-row size="3">
          <ion-col v-for="orders in orderList" :key="orders._id">
            <ion-card
              @click="openModal(orders)"
              :class="getStatusClass(orders.status)"
            >
              <ion-card-header>
                <ion-card-subtitle :class="getStatusClass(orders.status)"
                  >({{ orders.orderDate }}) -
                  {{ orders.orderId }}</ion-card-subtitle
                >
                <ion-card-title :class="getStatusClass(orders.status)">
                  {{ orders.desc }}
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import Modal from "../components/changeOfStatusModal";
import api from "../API/api";

export default {
  name: "Sclad",

  data() {
    return {
      orderList: null,
    };
  },
  methods: {
    getStatusClass(status) {
      const availableClasses = {
        1: "open",
        2: "assembly",
        3: "done",
        4: "err",
      };
      return availableClasses[status] ? availableClasses[status] : "";
    },
    openModal(orders) {
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            data: {
              orders,
            },
            propsData: {
              title: "Выбирите действие!!!",
            },
          },
        })
        .then((m) => m.present());
    },
    getOrders() {
      const self = this;
      api
        .getOrders()
        .then((res) => {
          const isErrors = res.data.isErrors;
          if (!isErrors) {
            // One line to array
            self.orderList = res.data;

            if (event) {
              event.target.complete();
            }
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

<style scoped>
ion-list-header {
  justify-content: center;
  align-items: center;
}
ion-card {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-card-subtitle {
  font-size: 38px;
}
ion-card-title {
  font-size: 48px;
}
.assembly {
  background: yellow;
}
.done {
  background: green;
  color: white;
}
.err {
  background: red;
  color: white;
}
.modal-wrapper .sc-ion-modal-md {
  height: 300px;
}
</style>
