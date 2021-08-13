<template>
    <div> 
        {{title}}
        <slot />
    </div>
</template>

<script lang="ts">
    export default {
        name:'ShakaTab',
        props:{
            title:{
                type:String,
                default:'标题'
            }
        }
    }
</script>

<style lang="scss">

</style>