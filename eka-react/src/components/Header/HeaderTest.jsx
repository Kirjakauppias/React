import logo from '../../logo.svg';
import styles from './HeaderTest.module.css';

export default function HeaderTest () {
    return (
        <div>
            <img src={logo} className={styles.App_logo} alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className={styles.App_link}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </div>
    );
}