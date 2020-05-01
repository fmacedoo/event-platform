import Styles from './Header.css';

export default function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.content}>
                <span>Left</span>
                <span>Header</span>
                <span>Right</span>
            </div>
        </div>
    )
}
