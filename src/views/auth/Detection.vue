<template>
    <div class="container">
      <div class="action-button" @click="toggleAction">Action</div>
      <div class="ease-box" :class="{action: isAction}">ease</div>
      <div class="ease-in-box" :class="{action: isAction}">ease-in</div>
      <div class="ease-out-box" :class="{action: isAction}">ease-out</div>
      <div class="ease-in-out-box" :class="{action: isAction}">ease-in-out</div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      isAction: false
    }
  },
  methods: {
    toggleAction () {
      this.isAction = !this.isAction
    }
  }
}
</script>

<style>
    body {
        text-align: center;
        color: #fff;
    }

    [class*="-box"] {
        width: 100px;
        height: 100px;
        background-color: #6266f5;
        margin-top: 40px;
        font-weight: bolder;
        transform: translateX(0);
        transition-duration: 2s;
        line-height: 100px;
    }

    .action [class*="-box"] {
        transform: translateX(500px);
    }

    .ease-box {
        transition-timing-function: ease;
    }

    .ease-in-box {
        transition-timing-function: ease-in;
    }

    .ease-out-box {
        transition-timing-function: ease-out;
    }

    .ease-in-out-box {
        transition-timing-function: ease-in-out;
    }

    .action-button {
        width: 84px;
        padding: 8px 6px;
        background-color: #6266f5;
        cursor: pointer;
        border-radius: 4px;
        opacity: .8;
    }
</style>
