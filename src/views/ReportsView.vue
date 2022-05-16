<template>
  <div>
    <Header/>
    <Report :expenses="expenses"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Report from "@/components/Report.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Reports",
  components: { Header, Report, Footer },
  data: () => ({
    expenses: [
      {
        id: 0,
        date: "711",
        amount: 0,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 1,
        date: "711",
        amount: 1,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 2,
        date: "711",
        amount: 2,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 3,
        date: "711",
        amount: 3,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 4,
        date: "711",
        amount: 4,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 5,
        date: "711",
        amount: 5,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 6,
        date: "711",
        amount: 6,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 7,
        date: "711",
        amount: 7,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 8,
        date: "711",
        amount: 8,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 9,
        date: "711",
        amount: 9,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 10,
        date: "711",
        amount: 10,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
    ],
  }),
};
</script>
<style></style>
