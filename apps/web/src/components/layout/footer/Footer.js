import Styles from './Footer.css';

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className={Styles.content}>
                <span>Left</span>
                <span>FOOTER</span>
                <span>Right</span>
            </div>
        </div>
    )
}
