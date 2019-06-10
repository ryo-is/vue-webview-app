import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ProfileImage extends Vue {
  public uploadImage: any = "";

  public selectedFile(event: Event) {
    event.preventDefault();
    const files: any = (event.target as any).files;
    const file: any = files[0];
    const reader: FileReader = new FileReader();
    reader.onload = (readerEvent: any) => {
      this.uploadImage = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
    console.log(this.uploadImage);
    console.log(file);
  }
}
