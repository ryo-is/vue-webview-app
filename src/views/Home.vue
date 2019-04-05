<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ title }}</h1>
    <p>{{ testText }}</p>
    <el-button type="primary" @click="callNativeFunc()">Test</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  public title: string = "WebView App";
  public testText: string = "";

  public mounted() {
    const self: Home = this;
    (window as any).testFunc = function(text: string) {
      self.testText = text;
    };
  }

  public destroyed() {
    window.removeEventListener("testFunc", this.testFunc as any, false);
  }

  public callNativeFunc() {
    alert("{key: \"Message From WebView\", value: 999}");
  }

  public testFunc(text: string) {
    this.testText = text;
  }
}
</script>
