'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

const a1 = new Node(10);
const b1 = new Node(20);
const c1 = new Node(30);
const d1 = new Node(40);
const e1 = new Node(50);
const f1 = new Node(60);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;

//A -> B -> C -> D -> NULL

const iterativePrintLinkedList = head => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const recursivePrintLinkedList = head => {
  if (head === null) return;

  console.log(head.val);
  recursivePrintLinkedList(head.next);
};

const iterativeLinkedListValues = head => {
  const values = [];
  let current = head;
  while (current != null) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values);
};

const recursiveLinkedListValues = head => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

const iterativeLinkedListSum = head => {
  let sum = 0;
  let current = head;
  while (current !== null && current.val) {
    sum += current.val;
    current = current.next;
  }
  console.log(sum);
  return sum;
};

const iterativeFindValue = (head, value) => {
  let current = head;
  while (current !== null) {
    if (current.val === value) return true;

    current = current.next;
  }

  return false;
};

const recursiveFindValue = (head, value) => {
  if (head === null) return false;
  if (head.val === value) return true;

  return recursiveFindValue(head.next, value);
};

const recursiveLinkedListSum = head => {
  if (head === null) return 0;
  return head.val + recursiveLinkedListSum(head.next);
};

const iterativeFindIndexValue = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) return current.val;
    current = current.next;
    count++;
  }
  return undefined;
};

const recursiveFindIndexValue = (head, index) => {
  if (head === null) return undefined;
  if (index === 0) return head.val;
  return recursiveFindIndexValue(head.next, --index);
};

const iterativeReverseList = head => {
  let current = head;
  let prev = null;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const recursiveReverseList = (head, prev = null) => {
  if (head === null) return prev;

  const next = head.next;
  head.next = prev;
  return recursiveReverseList(next, head);
};

const iterativeZipperList = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2;
  let current = head1;

  let count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      current.next = current2;
      current2 = current2.next;
    } else {
      current.next = current1;
      current1 = current1.next;
    }

    count++;
    current = current.next;
  }

  if (current1 !== null) {
    current.next = current1;
  }

  if (current2 !== null) {
    current.next = current2;
  }

  return head1;
};

// iterativePrintLinkedList(a);
// recursivePrintLinkedList(a);

// iterativeLinkedListValues(a);
// recursiveLinkedListValues(a);

// iterativeLinkedListSum(a);
// recursiveLinkedListSum(a);

// console.log(iterativeFindValue(a, 2));
// console.log(recursiveFindValue(a, 2));

// console.log(iterativeFindIndexValue(a, 3));
// console.log(recursiveFindIndexValue(a, 3));

// iterativePrintLinkedList(iterativeReverseList(a));
// iterativePrintLinkedList(recursiveReverseList(a));

iterativePrintLinkedList(iterativeZipperList(a, a1));
