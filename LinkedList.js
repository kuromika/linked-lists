import Node from "./Node.js";


const LinkedList = () => {
    let head = null;

    const getHead = () => head;

    const appendValue = (value) => {
        if (head === null) {
            head = Node(value);
        } else {
            _appendValue(head, value);
        }
    }

    const _appendValue = (current, value) => {
        if (current.getNext() === null) {
            current.setNext(Node(value));
        } else {
            _appendValue(current.getNext(), value);
        }
    }

    const toString = () => {
        let current = head;
        let string = '';
        while (current !== null) {
            string += `( ${current.getValue()} ) -> ${!current.getNext() ? 'null' : ''}`
            current = current.getNext();
        }
        return string;
    }

    return {getHead, appendValue, toString}
}

const testList = LinkedList();
testList.appendValue(2);
testList.appendValue(3);
console.log(testList.toString());