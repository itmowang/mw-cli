<template>
  <div id="app">
    <button @click="click1">进入子应用1</button>
    <button @click="click2">进入子应用2</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "App 主入口",
    };
  },
  methods: {
    click1() {
      location.href = "/dist/appliction/page1";
    },
    click2() {
      location.href = "/dist/appliction/page2";
    },
  },
};
</script>

<style></style>
