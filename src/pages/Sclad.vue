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
          <ion-col v-for="orders in orderList" :key="orders.id">
            <ion-card
              @click="openModal(orders)"
              :class="[
                orders[3] == 1 ? 'open' : '',
                orders[3] == 2 ? 'assembly' : '',
                orders[3] == 3 ? 'done' : '',
                orders[3] == 4 ? 'err' : '',
              ]"
            >
              <ion-card-header>
                <ion-card-subtitle
                  :class="[
                    orders[3] == 1 ? 'open' : '',
                    orders[3] == 2 ? 'assembly' : '',
                    orders[3] == 3 ? 'done' : '',
                    orders[3] == 4 ? 'err' : '',
                  ]"
                  >({{ orders[0] }}) - {{ orders[1] }}</ion-card-subtitle
                >
                <ion-card-title
                  :class="[
                    orders[3] == 1 ? 'open' : '',
                    orders[3] == 2 ? 'assembly' : '',
                    orders[3] == 3 ? 'done' : '',
                    orders[3] == 4 ? 'err' : '',
                  ]"
                  >{{ orders[2] }}</ion-card-title
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import Modal from "../components/changeOfStatusModal";

export default {
  name: "Sclad",

  data() {
    return {
      orderList: null,
    };
  },
  methods: {
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
          style: {
            height: "300px",
          },
        })
        .then((m) => m.present());
    },
  },

  mounted() {
    const vm = this;
    axios
      .get("http://localhost:85/orders/findOrder")
      .then((res) => {
        const isErrors = res.data.isErrors;
        if (!isErrors) {
          // One line to array
          vm.orderList = res.data.orders;

          if (event) {
            event.target.complete();
          }
        }
      })
      .catch((error) => console.log(error));
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
