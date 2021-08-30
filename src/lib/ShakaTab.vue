<template>
    <div class="shaka-tab"> 
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
