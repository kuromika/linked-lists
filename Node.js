const Node = (value = null, next = null) => {

    const getValue = () => value;
    const getNext = () => next;

    const setNext = (newNext) => next = newNext;

    return {getNext, getValue, setNext}
}

export default Node;