# Playwright E2E Tests

This directory contains end-to-end tests for the Synergize landing page using Playwright.

## Test Files

- `working.spec.ts` - Main test suite with core functionality tests
- `basic.spec.ts` - Basic app functionality tests
- `ui-improvements.spec.ts` - UI/UX improvements specific tests
- `minimal.spec.ts` - Minimal test cases
- `final.spec.ts` - Comprehensive test suite
- `simple.spec.ts` - Simple test cases

## Running Tests

```bash
# Run all tests
npm run test

# Run specific test file
npm run test tests/working.spec.ts

# Run tests with UI
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests with specific reporter
npm run test -- --reporter=list
```

## Test Coverage

The tests cover:

✅ **Homepage Loading**
- Page title verification
- Main heading visibility
- Basic page structure

✅ **Newsletter Form**
- Email validation
- Success/error states
- Form submission

✅ **Mobile Responsiveness**
- Mobile viewport rendering
- Mobile menu functionality
- Responsive design across screen sizes

✅ **Error Handling**
- JavaScript error detection
- Page load stability

✅ **Cross-Browser Testing**
- Chromium (Desktop Chrome)
- Firefox
- Mobile Chrome

## Test Results

All tests in `working.spec.ts` are currently passing across all browsers:

- ✅ Homepage loads successfully
- ✅ Newsletter form validation works
- ✅ Mobile responsive design works
- ✅ Page loads without JavaScript errors
- ✅ Responsive design works across screen sizes

## Configuration

Tests are configured in `playwright.config.ts`:
- Base URL: `http://localhost:5173`
- Automatic dev server startup
- Cross-browser testing (Chromium, Firefox, Mobile Chrome)
- HTML reporter for detailed results