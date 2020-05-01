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
        <ion-list v-for="(order, index) in orderList" :key="index">
          <!-- @click="$router.push({ name: 'OrderDetails' })" -->
          <ion-list v-for="(orderItem, index) in order" :key="index" size="12">
            <ion-row>
              <ion-col
                v-for="(item, index) in orderItem"
                :key="index"
                style="width:100%"
              >
                <span v-if="index === 0" class="first-col">
                  <i>{{ item }}</i>
                </span>
                <span v-if="index === 1" class="second-col">{{ item }}</span>
                <span v-if="index === 2" class="third-col">
                  <Status :status="parseInt(item)" />
                </span>
              </ion-col>
            </ion-row>
          </ion-list>
        </ion-list>
      </ion-grid>
    </ion-content>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="$router.push({ name: 'Settings' })">
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
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
      orderList: [],
      oredeItem: "",
    };
  },
  methods: {
    getOrders(event = undefined) {
      const vm = this;
      console.log(event);
      axios
        .get("http://78.85.25.174:85/")
        .then((res) => {
          // console.log(res.data);
          const isErrors = res.data.isErrors;
          if (!isErrors) {
            // One line to array
            vm.orderList = [...vm.orderList, res.data.orders];
            //vm.orderList.push(res.data.orders);

            if (event) {
              event.target.complete();
            }
            console.log(vm.orderList);
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
