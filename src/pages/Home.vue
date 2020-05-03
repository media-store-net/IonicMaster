<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Заявки мастера</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="getOrders($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-grid class="home-grid">
        <ion-list-header>
          <ion-label>Список заявок</ion-label>
        </ion-list-header>
        <ion-list size="12">
          <ion-row v-for="orders in orderList" :key="orders.id">
            <ion-col>
              <span class="first-col">
                <i>{{ orders.orderDate }}-{{ orders.orderId }}</i>
              </span>
            </ion-col>
            <ion-col>
              <span class="second-col">{{ orders.desc }}</span>
            </ion-col>
            <ion-col>
              <span class="third-col"
                ><Status :status="parseInt(orders.status)"
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
import api from "../API/api";
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
  created() {
    this.getOrders();
  },
  mounted() {},
};
</script>

<style scoped>
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
