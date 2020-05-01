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
        <ion-item v-for="(order, index) in orderList[0]" :key="index">
          <!-- @click="$router.push({ name: 'OrderDetails' })" -->
          <div
            v-for="(orderItem, index) in order"
            :key="index"
            class="order"
            :class="[index === 2 ? 'active' : 'red']"
          >
            <span v-if="index === 0" style="width:75%">
              <i>{{ orderItem }}</i>
            </span>
            <span v-if="index === 1">{{ orderItem }}</span>
            <!-- <span v-if="index === 2" slot="end">
              <ion-note slot="end">{{ orderItem }}</ion-note>
            </span> -->
          </div>
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
      .get("http://localhost:85/")
      .then((res) => {
        const isErrors = res.data.isErrors;
        if (!isErrors) {
          // One line to array
          // console.log(res.data.orders);
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
.order {
  display: flex;
}
.active {
  background: green;
}
.red {
  background: hotpink;
}
</style>
