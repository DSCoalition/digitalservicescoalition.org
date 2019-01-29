<template>
    <div id="app">
        
        <Nav/>
        <router-view/>
        <Nav class="pt-5 pt-sm-0"/>
        
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
