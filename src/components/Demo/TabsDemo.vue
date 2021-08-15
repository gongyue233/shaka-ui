<template>
    <div class="shaka-demo-tabs">
        ShakaTabs的 Demo 页面
        <hr>
        <shaka-tabs class="tabs-demo">
            <shaka-tab title="导航 1"></shaka-tab>
            <shaka-tab title="导航2"></shaka-tab>
            <shaka-tab title="导航3">内容3</shaka-tab>
            <shaka-tab title="导航4"></shaka-tab>
            
        </shaka-tabs>
    </div>
</template>

<script lang="ts">
import ShakaTabs from "../../lib/ShakaTabs.vue";
import ShakaTab from "../../lib/ShakaTab.vue";
export default {
    components:{
        ShakaTabs,ShakaTab
    }
}
</script>

<style lang="scss">
.shaka-demo-tabs{
    .tabs-demo{
        width: 360px;
    }
}
</style>