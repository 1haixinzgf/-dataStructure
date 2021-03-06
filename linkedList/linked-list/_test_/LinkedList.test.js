import LinkedList from '../LinkedList';
describe('LinkedList',()=>{
  it('should create empty linked list',()=>{
    const linkedList=new LinkedList();
    expect(linkedList.toString()).toBe('');//断言库，期望结果为'1,2'
  });
  it('should append node to linked list',()=>{
    const linkedList=new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    linkedList
      .append(1)
      .append(2)
      .append(3)//链式调用
    expect(linkedList.toString()).toBe('1,2,3');
  });
  it('should prepend node to linked list',()=>{
    const linkedList=new LinkedList();
    linkedList
      .append(1)
      .append(3);
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('3');
      linkedList.prepend(2);
      expect(linkedList.toString()).toBe('2,1,3');
  })
  it('should delete node by value form linked list', () => {
    // 如何删除?前一个节点的next指向要删的那个节点的next
    const linkedList=new LinkedList();
    expect(linkedList.delete(5)).toBeNull();
    linkedList
      .append(1)
      .append(1)
      .append(2)
      .append(3)
      .append(3)
      .append(3)
      .append(4)
      .append(5)
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');
    const deleteNode = linkedList.delete(3);
    expect(deleteNode.value).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');
  })
  it('should delete node by value form linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.find({ value: 5 })).toBeNull();
    linkedList
      .append(1)
      .append(2)
      .append(3)
    const node = linkedList.find({ value: 2 });
    expect(node.value).toBe(2);
    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.find({value: 5})).toBeNull();
  })
})
