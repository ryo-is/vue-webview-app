import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  public title: string = "WebView App";
  public testText: string = "";
  public nickName: string = "KawasakiTaro";
  public birthday: string = "2000/01/01";
  public gender: string = "Male";
  public ridingStartYear: string = "2019/04/01";
  public area: string = "Asia/Kyoto";

  public genderItems: string[] = ["Male", "Female"];

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
