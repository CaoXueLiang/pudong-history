<template>
  <div class="container">
    <img
      class="width_100 margin_top_100"
      src="http://cdn1.zhizhucms.com/image/4586934/2020/9/26/%E6%97%B6%E9%97%B4%E8%BD%B4.png-hd"
      alt=""
    />
    <img
      class="backImage"
      @click="backMethod"
      src="http://cdn1.zhizhucms.com/image/4586934/2020/10/30/fh.png-hd"
    />
  </div>
</template>

<script>
export default {
  methods: {
    backMethod() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.width_100 {
  width: 100%;
}

.margin_top_100 {
  margin-top: 90px;
}

.backImage {
  width: 60px;
  height: 30px;
  position: fixed;
  right: 10px;
  cursor: pointer;
}
</style>
