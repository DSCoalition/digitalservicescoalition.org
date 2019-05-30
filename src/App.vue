<template>
    <div id="app">
        
        <Nav/>
        <router-view/>
        <Nav class="pt-5 pt-sm-0"/>
      
        <div class="container pb-5 text-right">
              <a href="https://github.com/DSCoalition/digitalservicescoalition.org" target="_blank">
                  <p class="text-gray text-sm">Our code is open source.</p>
              </a>
        </div>
        
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'

    export default {
      name: 'app',
      components: {
        Nav
      }
    }
</script>

<style lang="less">
    
</style>
