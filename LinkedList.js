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

    function tail(current = head) {
        if (head === null) {
            return head;
        }
        if (current.getNext() === null) {
            return current;
        } else {
            return this.tail(current.getNext());
        }
    }

    function at(index, current = head) {
        if (index === 0) {
            return current;
        } else if (current === null) {
            return current;
        }
        return this.at(--index, current.getNext());
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
        return this.pop(current.getNext());
       
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

    return {getHead, append, toString, size, prepend,tail, at, pop}
}

const testList = LinkedList();
