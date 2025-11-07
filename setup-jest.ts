import 'jest-preset-angular/setup-jest';

<<<<<<< HEAD
// Global test environment setup for Angular with Jest

// Global test configuration
=======
// Global test setup for Angular Jest tests

// Mock global objects that might be used in components
>>>>>>> 5d651121e32e06614eb98e125e8daba5e16c886f
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
<<<<<<< HEAD
      appearance: ['-webkit-appearance'],
    };
  },
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
=======
      appearance: ['-webkit-appearance']
    };
  }
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
>>>>>>> 5d651121e32e06614eb98e125e8daba5e16c886f
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
<<<<<<< HEAD
      configurable: true,
    };
  },
});

// Mock IntersectionObserver
(global as any).IntersectionObserver = class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = [];
  
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {}
  
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
};

// Mock ResizeObserver
(global as any).ResizeObserver = class ResizeObserver {
  constructor(callback: ResizeObserverCallback) {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Configure Jest globals
global.beforeEach(() => {
  // Reset mocks before each test
  jest.clearAllMocks();
});

// Suppress console warnings for cleaner test output
const originalWarn = console.warn;
beforeAll(() => {
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Angular is running in development mode')
    ) {
      return;
    }
    originalWarn(...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
=======
      configurable: true
    };
  }
});

// Mock HTMLElement.prototype methods that might not be available
if (typeof HTMLElement.prototype.scrollIntoView === 'undefined') {
  HTMLElement.prototype.scrollIntoView = jest.fn();
}

if (typeof HTMLElement.prototype.focus === 'undefined') {
  HTMLElement.prototype.focus = jest.fn();
}

if (typeof HTMLElement.prototype.blur === 'undefined') {
  HTMLElement.prototype.blur = jest.fn();
}

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Increase timeout for slow tests
jest.setTimeout(10000);

// Global error handler for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
>>>>>>> 5d651121e32e06614eb98e125e8daba5e16c886f
});