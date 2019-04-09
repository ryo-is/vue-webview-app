<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ title }}</h1>
    <p>{{ testText }}</p>
    <el-button type="primary" @click="callNativeFunc()">Test</el-button>
    <el-button type="primary" @click="getAPITest()">Rest GET</el-button>
    <el-button type="primary" @click="getAPITest()">Rest POST</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

const apiUrl: string = "https://wk38g6uoe4.execute-api.ap-northeast-1.amazonaws.com/prod/";

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
    alert("{key: \"Message From WebView\", value: 999}");
  }

  public async getAPITest() {
    const result: any = await axios({
      method: "GET",
      url: apiUrl + "getReq"
    });
    console.log(result);
  }

  public async postAPITest() {
    const result: any = await axios({
      method: "POST",
      url: apiUrl + "postReq"
    });
    console.log(result);
  }

  public testFunc(text: string) {
    this.testText = text;
  }
}
</script>
