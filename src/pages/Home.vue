<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Master</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="getOrders($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-grid class="home-grid">
        <ion-list-header>
          <ion-label>Список заказов</ion-label>
        </ion-list-header>
        <ion-list size="12">
          <ion-row v-for="orders in orderList" :key="orders.id">
            <ion-col>
              <span class="first-col">
                <i>{{ orders[0] }}-{{ orders[1] }}</i>
              </span>
            </ion-col>
            <ion-col>
              <span class="second-col">{{ orders[2] }}</span>
            </ion-col>
            <ion-col>
              <span class="third-col"
                ><Status :status="parseInt(orders[3])"
              /></span>
            </ion-col>
          </ion-row>
        </ion-list>
      </ion-grid>
    </ion-content>
    <!-- <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="$router.push({ name: 'Settings' })">
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </ion-fab-button>
    </ion-fab> -->
  </ion-page>
</template>

<script>
import { ellipsisVerticalOutline } from "ionicons/icons";
import { addIcons } from "ionicons";
import axios from "axios";
import Status from "../components/status";

addIcons({
  "ios-ellipsis-vertical-outline": ellipsisVerticalOutline,
  "md-ellipsis-vertical-outline": ellipsisVerticalOutline,
});

export default {
  name: "Home",
  components: {
    Status,
  },
  data() {
    return {
      orderList: null,
    };
  },
  methods: {
    getOrders(event = undefined) {
      const vm = this;
      axios
        .get("http://localhost:85/orders/findOrder")
        .then((res) => {
          const isErrors = res.data.isErrors;
          // console.log(res.data.orders);
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
  },
  created() {
    //if (!this.orderList.length) {
    this.getOrders();
    //}
  },
  mounted() {},
};
</script>

<style scoped>
/* ion-col {
  display: flex;
} */
.first-col {
  justify-content: flex-start;
}
ion-list-header {
  justify-content: center;
  align-items: center;
}
.home-grid ion-col {
  justify-content: left;
  text-align: left;
  flex: 7;
}
.home-grid ion-col:first-of-type {
  flex: 3;
}

.home-grid ion-col:last-of-type {
  justify-content: flex-end;
  text-align: center;
  flex: 2;
}
</style>
