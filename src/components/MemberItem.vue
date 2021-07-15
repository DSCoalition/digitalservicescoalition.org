<template>
  <div>
      <div class="col-md-4 col-2">
          <a :href="linkUrl">
              <img :src="require(`@/assets/${img}`)" class="img-fluid" :alt="imgAlt" />
          </a>
      </div>
      <div class="col-md-8 col-10">
          <p><slot></slot></p> 
      </div>
  </div>
</template>

<script>
export default {
  name: "MemberItem",
  props: {
    linkUrl: String,
    img: String,
    imgAlt: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
