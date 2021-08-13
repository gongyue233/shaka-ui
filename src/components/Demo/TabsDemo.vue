<template>
    <div>
        ShakaTabs的 Demo 页面
        <hr>
        <shaka-tabs>
            <shaka-tab title="导航1">内容1</shaka-tab>
            <shaka-tab title="导航2">内容2</shaka-tab>
            <shaka-tab title="导航3">内容3</shaka-tab>
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

</style>