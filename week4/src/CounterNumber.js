function CountNumber({ count }) {

    function coloredNumber() {
        if (count >= 0) {
            return `rgb(${count}, 0, 0)`
        }
    }

    const h2Style = {
        fontSize: '30px',
        color: `${coloredNumber()}`
    }

    return (
        <h2 style={h2Style}>{count}</h2>
    );
}

export default CountNumber;