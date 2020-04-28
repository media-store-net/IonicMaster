<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>App-Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-list-header>
          <ion-label>Choose a View Mode</ion-label>
        </ion-list-header>
        ...
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Settings",
};
</script>

<style scoped>
ion-list-header {
  justify-content: center;
  align-items: center;
}
</style>
