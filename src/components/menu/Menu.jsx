import styles from "./menu.module.css"

const Menu = () => {
  return(
    <div className={styles.menuBand}>
<ul>
  <li><a href="#">Inicio</a></li>
  <li><a href="#">Séries</a></li>
  <li><a href="#">Filmes</a></li>
  <li><a href="#">Catálogo</a></li>
</ul>
    </div>
  )
}

export default Menu;