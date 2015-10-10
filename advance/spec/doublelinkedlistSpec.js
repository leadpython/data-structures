describe('Double linkedList', function() {
  var doublelinkedList;

  beforeEach(function() {
    doublelinkedList = new DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublelinkedList).to.have.property("head");
    expect(doublelinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublelinkedList.addToTail).to.be.a("function");
    expect(doublelinkedList.removeHead).to.be.a("function");
    expect(doublelinkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublelinkedList.addToTail(4);
    expect(doublelinkedList.tail.value).to.equal(4);
    doublelinkedList.addToTail(5);
    expect(doublelinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doublelinkedList.addToTail(4);
    doublelinkedList.addToTail(5);
    expect(doublelinkedList.head.value).to.equal(4);
    doublelinkedList.removeHead();
    expect(doublelinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doublelinkedList.addToTail(4);
    expect(doublelinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    doublelinkedList.addToTail(4);
    doublelinkedList.addToTail(5);
    expect(doublelinkedList.contains(4)).to.equal(true);
    expect(doublelinkedList.contains(5)).to.equal(true);
    expect(doublelinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    doublelinkedList.addToTail(4);
    doublelinkedList.addToTail(5);
    doublelinkedList.removeHead();
    expect(doublelinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});