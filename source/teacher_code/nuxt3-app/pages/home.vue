<script setup>
const { data } = await useAsyncData('ssr', () => $fetch('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/release/api/room/getRoomList?pageNo=1&pageSize=2&cityCode=sz'))
const listData =  data.value.result.orders.data
console.log(listData)
</script>

<template>
  Page visits:
  <div v-for="(item, index) in listData" :key="index">{{item.title}}</div>
</template>