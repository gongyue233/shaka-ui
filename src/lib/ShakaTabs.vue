<template>
    <div>
        Tabs 组件
        <hr>
        <component :is="defaults[0]" />
        <component :is="defaults[1]" />
    </div>
</template>

<script lang="ts">
export default {
    name:'ShakaTabs',
    setup(props, context){
        const defaults = context.slots.default();
        return {
            defaults
        }
    }
}
</script>

<style lang="scss">

</style>