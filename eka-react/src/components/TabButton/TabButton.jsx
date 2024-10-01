import styles from './TabButton.module.css';

const TabButton = ({ children, onSelect}) =>  {

    console.log("TabButton EXECUTING " + children);

    return (

            <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;