<template>
  <modal name="modalCell" :height="370" :width="570">
    <div>
      <ion-header>
        <ion-toolbar>
          <ion-title class="modalTitle">Нужно указать ячейку!!!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-row>
        <ion-col>
          <ion-button shape="round" fill="outline">1</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">2</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">3</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">4</ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button shape="round" fill="outline">5</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">6</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">7</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">8</ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button shape="round" fill="outline">9</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">10</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">11</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" fill="outline">12</ion-button>
        </ion-col>
      </ion-row>
    </div>
  </modal>
</template>

<script>
export default {
  name: "Modal",

  data() {
    return {
      content: "Content",
    };
  },
};
</script>
<style scoped>
ion-button {
  width: 135px;
  height: 95px;
  font-size: 30px;
}
</style>
