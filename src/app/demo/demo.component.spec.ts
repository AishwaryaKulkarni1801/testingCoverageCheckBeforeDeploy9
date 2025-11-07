import { DemoComponent } from './demo.component';

// Tests follow established pattern: direct instantiation (no TestBed), small helper
// factories and explicit mocking where needed. Naming: 'should <action> when <condition>'.

describe('DemoComponent (direct instantiation)', () => {
  let component: DemoComponent;

  const createComponent = (): DemoComponent => new DemoComponent();

  beforeEach(() => {
    component = createComponent();
  });

  it('should create component with initial state when instantiated', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBe('Demo Component');
    expect(component.message).toBe('Welcome to the demo section!');
    expect(component.counter).toBe(0);
    expect(component.items).toEqual(['Item 1', 'Item 2', 'Item 3']);
    expect(component.newItem).toBe('');
    expect(component.showDetails).toBe(false);
  });

  it('should increment counter when increment is called', () => {
    component.increment();
    expect(component.counter).toBe(1);
    component.increment();
    expect(component.counter).toBe(2);
  });

  it('should decrement counter when decrement is called', () => {
    component.increment(); // 1
    component.increment(); // 2
    component.decrement(); // 1
    expect(component.counter).toBe(1);
    component.decrement(); // 0
    expect(component.counter).toBe(0);
  });

  it('should reset counter to zero when reset is called', () => {
    component.increment();
    component.increment();
    expect(component.counter).toBeGreaterThan(0);
    component.reset();
    expect(component.counter).toBe(0);
  });

  it('should add trimmed newItem and clear newItem when addItem is called with text', () => {
    const before = component.items.length;
    component.newItem = '   my new item   ';
    component.addItem();
    expect(component.items.length).toBe(before + 1);
    expect(component.items[component.items.length - 1]).toBe('my new item');
    expect(component.newItem).toBe('');
  });

  it('should not add item when newItem is empty or whitespace', () => {
    const before = component.items.length;
    component.newItem = '   ';
    component.addItem();
    expect(component.items.length).toBe(before);

    component.newItem = '';
    component.addItem();
    expect(component.items.length).toBe(before);
  });

  it('should remove item at the given index when removeItem is called with valid index', () => {
    // initial items: ['Item 1', 'Item 2', 'Item 3']
    component.removeItem(1);
    expect(component.items).toEqual(['Item 1', 'Item 3']);
  });

  it('should do nothing when removeItem is called with out-of-range positive index', () => {
    const before = [...component.items];
    component.removeItem(100);
    expect(component.items).toEqual(before);
  });

  it('should remove last item when removeItem is called with negative index (Array.splice behavior)', () => {
    // splice(-1,1) removes last element
    component.removeItem(-1);
    expect(component.items).toEqual(['Item 1', 'Item 2']);
  });

  it('should toggle showDetails when toggleDetails is called', () => {
    expect(component.showDetails).toBe(false);
    component.toggleDetails();
    expect(component.showDetails).toBe(true);
    component.toggleDetails();
    expect(component.showDetails).toBe(false);
  });

  it('should return mocked time string from getCurrentTime', () => {
    // Spy on Date.prototype.toLocaleTimeString to return deterministic value
    const mockTime = '12:34:56';
    const spy = jest.spyOn(Date.prototype, 'toLocaleTimeString').mockReturnValue(mockTime);
    const time = component.getCurrentTime();
    expect(time).toBe(mockTime);
    spy.mockRestore();
  });

  it('should maintain isolation between instances', () => {
    const a = createComponent();
    const b = createComponent();
    a.increment();
    b.increment();
    b.increment();
    expect(a.counter).toBe(1);
    expect(b.counter).toBe(2);
    a.addItem(); // a.newItem is '' so no-op
    a.newItem = 'A';
    a.addItem();
    expect(a.items[a.items.length - 1]).toBe('A');
    expect(b.items[b.items.length - 1]).not.toBe('A');
  });
});
