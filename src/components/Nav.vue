<template>
    <nav class="navbar navbar-expand-lg">
        <router-link to="/" class="navbar-brand">
            <img alt="Digital Services Coalition" src="@/assets/dsc-logo.png" class="logo">
            {{ msg }}
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
                <span class="line-1"></span>
                <span class="line-2"></span>
                <span class="line-3"></span>
            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-links">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home
                    <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/mission" class="nav-link">Mission</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/story" class="nav-link">Story</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/membership" class="nav-link">Membership</router-link>
                </li>
                <li class="nav-item">
                    <a href="https://shop.digitalservicescoalition.org/" class="nav-link" target="_blank">Shop</a>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    
</style>
