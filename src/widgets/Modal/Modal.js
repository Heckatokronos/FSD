import Button from '../../shared/UI/Button/Button'
import Card from '../../shared/UI/Card/Card'

import styles from './Modal.module.css'

const Modal = (props) => {
    return (
        <>
            <div className={styles.backdrop} />
            <Card className={styles.modal} >
                <header className={styles.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button>Хорошо</Button>
                </footer>
            </Card>
        </>
    )
}

export default Modal