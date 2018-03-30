<template>
  
  <button class="my-button"><slot></slot></button>

</template>

<script>

// import Vue from 'vue'

// let MyButton = {
//   name:'my-button'
// }

// Vue.component('my-button',MyButton)

export default {
  name:'my-button',
  props:['text']
}
</script>

<style lang="scss" scoped>
    .my-button{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 4px;
        border: 0;
        box-sizing: border-box;
        color: inherit;
        display: block;
        font-size: 18px;
        height: 41px;
        outline: 0;
        overflow: hidden;
        position: relative;
        text-align: center;
    }

    .my-button[type='danger'] {
        background: red;color: #fff;
    }
    .my-button[disabled] {
        background: red;color: #fff;
        opacity: 0.5;
    }
</style>


