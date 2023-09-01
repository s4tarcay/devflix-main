// para utilizar um oponente crie o import na pagina que deseja
// coloque o descritivo entre <Footer>Descritivo</Footer>
// passe informação dentro da tag footer - link
// <Footer link={}>ProfCastello</Footer>
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";

const Footer = ({children, link}) => {
  return (
    <footer>
      <p>
        feito com <ion-icon name="heart" /> por Caitto
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/s4tarcay"}/>
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/caitto_souza"}/>
        
    </footer>
  );
};

export default Footer;
