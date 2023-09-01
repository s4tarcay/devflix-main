import styles from "./menu.module.css"

const Menu = () => {
  return(
    <div className={styles.menuBand}>
<ul>
  <li><a href="#">Inicio</a></li>
  <li><a href="#"></a>Séries</li>
  <li><a href="#"></a>Filmes</li>
  <li><a href="#"></a>Catálogo</li>
</ul>
    </div>
  )
}

export default Menu;