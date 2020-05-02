import Styles from './Container.css';

export default function Container({ children }) {
    return <div className={Styles.container}>{children}</div>;
}
