class HomeController {
  constructor() {
    this.name = 'home';
    this.quill1;
    this.quill2;

  }

  // imagem = './src/assets/images/image.jpg';
  // imagem1 = './src/assets/images/image1.jpg';
  // imagem2 = './src/assets/images/image2.jpg';
  // imagem3 = './src/assets/images/image3.jpg';
  // logo = './src/assets/images/logo.jpg';
  // logo1 = './src/assets/images/logo1.jpg';
  // logo2= './src/assets/images/logo2.jpg';
  // logo3 = './src/assets/images/logo3.jpg';

  quill1 = new Quill('#editorUm', {
    theme: 'bubble'
  });
  quill2 = new Quill('#editorDois', {
    theme: 'bubble'
  });







}
export default HomeController;


