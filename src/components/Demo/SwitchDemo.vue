<template>
<h1>Switch 开关</h1>
<demo-2 :codeComp="SwBool" :description="description['checked']" />
<demo-2 :codeComp="SwDisable" :description="description['disable']"  />
</template>

<script>
import Demo2 from "../Demo2.vue";
import SwBool from "./SwDemo/SwBool.vue";
import SwDisable from "./SwDemo/SwDisable.vue";
  export default {
    components:{
      Demo2,SwBool,SwDisable
    },
    setup(){
      const description = {
        checked: "通过 v-model:checked 绑定开关的选中状态，true 表示开，false 表示关，默认是 false 。",
        disable:"通过 disabled 属性来禁用开关，禁用状态下开关不可点击。"
      }
      return {
        Demo2,SwBool,SwDisable,
        description
      }
    }
    
  }
</script>

