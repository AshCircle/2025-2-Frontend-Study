function CountButton({ isReset = false, delta, onEvent }) {

    function clickEvent() {
        if (isReset) onEvent();
        else onEvent(delta);
    }

    return (
        <button onClick={clickEvent}>
            {isReset ? 'RESET' : delta > 0 ? `+${delta}` : delta}
        </button>
    );
}

export default CountButton;