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

    const prepend = (value) => {
        if (head === null) {
            head = Node(value);
        } else {
            const newHead = Node(value);
            newHead.setNext(head);
            head = newHead;
        }
    }

    function size(current = head, size = 0){
        if (current === null) {
            return size;
        } else {
            return this.size(current.getNext(), size += 1);
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

    return {getHead, append, toString, size, prepend}
}

const testList = LinkedList();
testList.append(2);
testList.append(3);
testList.prepend(1);
console.log(testList.toString());
console.log(testList.size());