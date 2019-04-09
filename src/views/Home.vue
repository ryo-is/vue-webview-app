<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ title }}</h1>
    <p>{{ testText }}</p>
    <el-button type="primary" @click="callNativeFunc()">Test</el-button>
    <!-- <el-button type="primary" @click="gqlQuery()">Query</el-button>
    <el-button type="primary" @click="gqlMutation()">Mutation</el-button> -->
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
    (window as any).testFunc = (text: string) => {
      self.testText = text;
    };
  }

  public callNativeFunc() {
    alert(JSON.stringify({key: "Message From WebView", value: 999}));
  }

  public gqlQuery() {
    alert("{action: \"query\"}");
  }

  public gqlMutation() {
    alert("{action: \"mutation\"}");
  }

  public testFunc(text: string) {
    this.testText = text;
  }
}
</script>
