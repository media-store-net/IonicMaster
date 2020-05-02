<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-button color="success">Готово к выдаче</ion-button>
    <ion-button color="warning">Начать сборку</ion-button>
    <ion-button color="danger">Ошибка</ion-button>
    <ion-button color="secondary">Завершить заказ</ion-button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" },
  },
  data() {
    return {
      content: "Content",
    };
  },
};
</script>
<style scoped>
ion-button {
  height: 70px;
}
.modal-wrapper.sc-ion-modal-md {
  height: 300px;
}
</style>
