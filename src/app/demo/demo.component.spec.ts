import { DemoComponent } from './demo.component';

describe('DemoComponent (direct instantiation)', () => {
	let component: DemoComponent;

	beforeEach(() => {
		component = new DemoComponent();
	});

	it('should have correct default property values', () => {
		expect(component.title).toBe('Demo Component');
		expect(component.message).toBe('Welcome to the demo section!');
		expect(component.counter).toBe(0);
		expect(Array.isArray(component.items)).toBe(true);
		expect(component.items.length).toBe(3);
		expect(component.newItem).toBe('');
		expect(component.showDetails).toBe(false);
	});

	it('increment should increase counter', () => {
		component.increment();
		expect(component.counter).toBe(1);
	});

	it('decrement should decrease counter', () => {
		component.counter = 2;
		component.decrement();
		expect(component.counter).toBe(1);
	});

	it('decrement can go negative (no guard)', () => {
		component.counter = 0;
		component.decrement();
		expect(component.counter).toBe(-1);
	});

	it('reset should set counter to 0', () => {
		component.counter = 5;
		component.reset();
		expect(component.counter).toBe(0);
	});

	describe('addItem', () => {
		it('should not add when newItem is empty or whitespace', () => {
			component.newItem = '   ';
			const before = component.items.length;
			component.addItem();
			expect(component.items.length).toBe(before);
			expect(component.newItem).toBe('   ');
		});

		it('should trim and add item then reset newItem', () => {
			component.newItem = '  New Item  ';
			const before = component.items.length;
			component.addItem();
			expect(component.items.length).toBe(before + 1);
			expect(component.items[component.items.length - 1]).toBe('New Item');
			expect(component.newItem).toBe('');
		});
	});

	describe('removeItem', () => {
		it('should remove item at valid index', () => {
			component.items = ['a', 'b', 'c'];
			component.removeItem(1);
			expect(component.items).toEqual(['a', 'c']);
		});

		it('should do nothing for out-of-range index', () => {
			component.items = ['a', 'b', 'c'];
			const before = [...component.items];
			component.removeItem(10);
			expect(component.items).toEqual(before);
		});
	});

	it('toggleDetails should flip showDetails', () => {
		expect(component.showDetails).toBe(false);
		component.toggleDetails();
		expect(component.showDetails).toBe(true);
		component.toggleDetails();
		expect(component.showDetails).toBe(false);
	});

	it('getCurrentTime should return locale time string (mocked)', () => {
		const fakeTime = '12:34:56 PM';
		const spy = jest.spyOn(Date.prototype, 'toLocaleTimeString').mockReturnValue(fakeTime);
		const res = component.getCurrentTime();
		expect(res).toBe(fakeTime);
		spy.mockRestore();
	});
});

