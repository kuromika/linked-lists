const Node = (value = null, next = null) => {

    const getValue = () => value;
    const getNext = () => next;

    const setNext = (newNext) => next = newNext;
    const setValue = (newValue) => value = newValue;

    return { getNext, getValue, setNext, setValue };
}

export default Node;