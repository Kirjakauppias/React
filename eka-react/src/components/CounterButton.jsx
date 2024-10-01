const CounterButton = ({onSelect, children}) => {
    return(
        <button onClick={onSelect}>{children}</button>
    );

}

export default CounterButton;