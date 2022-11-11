import { useState } from 'react';

const TestComponent = (props) => {
    const [index, setIndex] = useState(0);
    console.log('Test component render');
    function handleClick(event) {
        console.log(event);
        event.target.innerText = 'New text';
        setIndex(index +1);
    }

    function handleClickCountMinus(event) {
        props.setCount(props.count -1);
    }
    return (
        <div>
            <h1>{props.message}</h1>
            Index: {index}
            <div>
                <button onClick={handleClick}>Add 1</button>
                <button onClick={handleClickCountMinus}>Remove 1</button>
            </div>
        </div>
    );
};

TestComponent.defaultProps = {
    message: "Default Message", 
};

const ArrowComponent = (props) => {
    const [count, setCount] = useState(0);
    console.log('Arrow render');

    const array = [
        'test 1',
        'test 2',
        'test 3',
    ];

    return (
        <div>
            <div>{props.message} Count:<b>{count}</b></div>
            <small>{props.small}</small>
            <div>
                <button onClick={() => setCount(count + 1)}>Add 1</button>
            </div>
    <TestComponent count={count} setCount={setCount} />

            {array.map(a => {
                return (<div key={a}>{a}</div>)
            })}
        </div>
    );
}
export default ArrowComponent;