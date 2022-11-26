import styles from './Container.module.css'

// alterar classes e será mudado os intens da disposição nesse container
//vai ser um container flex e mudará propriedades por isso terá paramâmetro(props)
function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container;