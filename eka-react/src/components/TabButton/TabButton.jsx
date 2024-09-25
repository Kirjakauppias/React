import styles from './TabButton.module.css';

const TabButton = ({ children, onSelect}) =>  {

    return (

            <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;