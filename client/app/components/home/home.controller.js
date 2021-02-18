class HomeController {
  constructor() {
    this.name = 'home';
    this.quill1 = new Quill('#editorUm',{theme: 'bubble'});
    this.quill2 = new Quill('#editorDois',{theme: 'bubble'});
  }
}
export default HomeController;


