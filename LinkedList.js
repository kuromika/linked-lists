import Node from "./Node.js";


const LinkedList = (head = null) => {

    const getHead = () => head;

    const append = (value) => {
        if (head === null) {
            head = Node(value);
        } else {
            _append(head, value);
        }
    }

    const _append = (current, value) => {
        if (current.getNext() === null) {
            current.setNext(Node(value));
        } else {
            _append(current.getNext(), value);
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

    return {getHead, append, toString}
}

const testList = LinkedList();
testList.append(2);
testList.append(3);
console.log(testList.toString());