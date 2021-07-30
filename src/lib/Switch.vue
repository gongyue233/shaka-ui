<template>
    <div>
        <button class="shaka-switch-button">
            <span class="shaka-switch-span"></span>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name:'Switch'
};
</script>

<style lang="scss">
$switch-h:30px;
$switch-color: #1687a7;
.shaka-switch-button{
    height: $switch-h;
    width: $switch-h*2;
    border: none;
    background-color: $switch-color;
    border-radius: $switch-h/2;
    position: relative;
    > .shaka-switch-span{
        position: absolute;
        border: 1px solid $switch-color;
        left: 0;
        top: 0;
        height: $switch-h;
        width: $switch-h;
        background-color: #f5f5f5;
        border-radius: $switch-h/2;
    }
}

</style>