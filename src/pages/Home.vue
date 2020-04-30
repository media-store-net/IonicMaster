<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Master</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-list-header>
          <ion-label>Список заказов</ion-label>
        </ion-list-header>
        <ion-item v-for="order in orderList[0]" :key="order.id">
          <!-- @click="$router.push({ name: 'OrderDetails' })" -->
          <span v-for="(orderItem, index) in order" :key="index">
            <span>
              <i> {{ orderItem }}</i>
            </span>
            <!-- <ion-note slot="start">{{ order.split("%")[0] }}</ion-note> -->
            <!-- <span style="width:90%">{{ orderItem[1] }}</span>
            <ion-note slot="end">{{ orderItem[2] }}</ion-note> -->
          </span>
        </ion-item>
      </ion-list>
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

addIcons({
  "ios-ellipsis-vertical-outline": ellipsisVerticalOutline,
  "md-ellipsis-vertical-outline": ellipsisVerticalOutline,
});

export default {
  name: "Home",
  components: {},
  data() {
    return {
      orderList: [],
    };
  },
  mounted() {
    const self = this;

    axios
      .get("http://192.168.1.10:85/")
      .then((res) => {
        const isErrors = res.data.isErrors;
        if (!isErrors) {
          // One line to array
          self.orderList.push(res.data.orders);
          console.log(self.orderList);
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
</style>
