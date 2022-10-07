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
            return size(current.getNext(), size += 1);
        }
    }

    function tail(current = head) {
        if (head === null) {
            return head;
        }
        if (current.getNext() === null) {
            return current;
        } else {
            return tail(current.getNext());
        }
    }

    function at(index, current = head) {
        if (index === 0) {
            return current;
        } else if (current === null) {
            return current;
        }
        return at(--index, current.getNext());
    }

    function pop(current = head) {
        if (head === null) { // linked list is empty
            return;
        } else if (head.getNext() === null) { // head === tail
            head = null;
            return;
        } else if (current.getNext().getNext() === null) { // head !== tail
            current.setNext(null);
            return;
        }
        return pop(current.getNext());
    }

    function contains(value, current = head) {
        if (current === null) {
            return false;
        } else if (current.getValue() === value) {
            return true;
        }
        return contains(value, current.getNext());
    }

    function find(value, index = 0,  current = head) {
        if (current === null) {
            return null;
        } else if (current.getValue() === value) {
            return index;
        }
        return find(value, index += 1, current.getNext());
    }

    function insertAt(value, index, current = head) {
        if (index === 0) { //the initial index is the head
            prepend(value);
            return;
        }
        if (index === 1) { //the index is one element behind the desired position
            const newNode = Node(value);
            newNode.setNext(current.getNext());
            current.setNext(newNode);
            return;
        }
        return insertAt(value, index -= 1, current.getNext());
    }


    const toString = () => {
        let current = head;
        let string = '';
        while (current !== null) {
            string += `( ${current.getValue()} ) -> `
            current = current.getNext();
        }
        if (current === null) {
            string += ' null ';
        }
        return string;
    }

    return {
        getHead, append, toString,
        size, prepend, tail, at, pop, contains,
        find, insertAt
    }
}

