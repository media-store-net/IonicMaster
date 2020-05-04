<template>
  <ion-page>
    <Status />
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Склад - Заказы</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-row size="3">
          <ion-col v-for="order in orderList" :key="order._id">
            <ion-card
              @click="showModal(order)"
              :class="[
                order.status == 0 ? 'open' : '',
                order.status == 1 ? 'assembly' : '',
                order.status == 2 ? 'done' : '',
                order.status == 3 ? 'err' : '',
              ]"
            >
              <ion-card-header>
                <ion-card-subtitle
                  :class="[
                    order.status == 0 ? 'open' : '',
                    order.status == 1 ? 'assembly' : '',
                    order.status == 2 ? 'done' : '',
                    order.status == 3 ? 'err' : '',
                  ]"
                  >({{ order.orderDate }}) -
                  {{ order.orderId }}</ion-card-subtitle
                >
                <ion-card-title
                  :class="[
                    order.status == 0 ? 'open' : '',
                    order.status == 1 ? 'assembly' : '',
                    order.status == 2 ? 'done' : '',
                    order.status == 3 ? 'err' : '',
                  ]"
                  >{{ order.desc }}</ion-card-title
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
import Status from "../components/modalStatus";
import api from "../API/api";

export default {
  name: "Sclad",
  components: {
    Status,
  },
  data() {
    return {
      orderList: null,
    };
  },
  methods: {
    showModal(order) {
      this.$modal.show("modalStatus");
      console.log(order);
    },

    getOrders() {
      const self = this;
      api
        .getOrders()
        .then((res) => {
          const isErrors = res.data.isErrors;
          if (!isErrors) {
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
</style>
