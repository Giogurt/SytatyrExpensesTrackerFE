<template>
  <div>
    <Header/>
    <Report/>
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
    //
  }),
};
</script>
<style></style>
