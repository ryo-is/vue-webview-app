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
    const reqBody: string = JSON.stringify(
      {
        action: "createUserSetting",
        body: {
          nickName: this.nickName,
          birthday: this.birthday,
          gender: this.gender,
          ridingStartYear: this.ridingStartYear,
          area: this.area
        }
      }
    );
    alert(reqBody);
  }

  public testFunc(text: string) {
    this.testText = text;
  }
}
