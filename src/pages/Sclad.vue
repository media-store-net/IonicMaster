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
              @click="presentActionSheet"
              :class="[
                orders[3] == 1 ? 'open' : '',
                orders[3] == 2 ? 'assembly' : '',
                orders[3] == 3 ? 'done' : '',
                orders[3] == 4 ? 'err' : '',
              ]"
            >
              <ion-checkbox color="primary"></ion-checkbox>
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

export default {
  name: "Sclad",

  data() {
    return {
      orderList: null,
    };
  },
  methods: {
    // clickCard(orders) {
    //   console.log(orders);
    // },
    presentActionSheet() {
      return this.$ionic.actionSheetController
        .create({
          header: "Действия",
          buttons: [
            {
              text: "Начать сборку",
              icon: "trash",
              handler: () => {
                console.log("Начать сборку");
              },
            },
            {
              text: "Готово",
              icon: "share",
              handler: () => {
                console.log("Готово");
              },
            },
            {
              text: "Выдать",
              icon: "arrow-dropright-circle",
              handler: () => {
                console.log("Выдать");
              },
            },
          ],
        })
        .then((a) => a.present());
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
ion-checkbox {
  position: absolute;
  top: 5px;
}
svg.checkbox-icon {
  border-radius: 50% !important;
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
