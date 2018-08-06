import LinkedListNode from './LinkedListNode';
// 形成链表？节点链起来？
// 数据集合从开始到结束显示出来
// [] next 
// head
//   next 
//   ...
// tail

export default class LinkedList{
  constructor(){
    //  不可以用head为null来判断链表为空
    this.head=null;
    this.tail=null;
  }
  toString (callback) { // 返回链表上每一个节点的value
    return this.toArray().map(node => node.toString(callback)).toString();
  }
  toArray () { // 链表 -> 数组
    const nodes = [];
    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  append (value) {
    const newNode = new LinkedListNode(value);
    // 空的 head为空
    // 非空 tail .tail next()
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } 
    this.tail.next = newNode;
    this.tail = newNode;
    return this; //返回一个this可以支持链式调用
  }
  prepend (value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  delete (value) {
    if (!this.head) {
      return null;
    }
    let deleteNode = null;
    // 先判断头结点是不是要删除的
    while(this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while(currentNode.next) {
        if (currentNode.next.value === value) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return deleteNode;
  }
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while(currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}
