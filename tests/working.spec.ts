import { test, expect } from '@playwright/test';

test.describe('Working E2E Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Synergize/);
    
    // Check main heading exists
    await expect(page.getByRole('heading', { name: /Precision for Mission-Critical AI/ })).toBeVisible();
  });

  test('newsletter form validation works', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to newsletter section
    await page.getByRole('heading', { name: /Join the Waitlist/ }).scrollIntoViewIfNeeded();
    
    // Test invalid email
    const emailInput = page.getByPlaceholder('Enter your email');
    await emailInput.fill('invalid-email');
    
    const submitButton = page.getByRole('button', { name: 'Join Waitlist' });
    await submitButton.click();
    
    // Should show validation error
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
    
    // Test valid email
    await emailInput.fill('test@example.com');
    await submitButton.click();
    
    // Should show success message
    await expect(page.getByText(/Thanks for joining/)).toBeVisible();
  });

  test('mobile responsive design works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if main heading is visible on mobile
    await expect(page.getByRole('heading', { name: /Precision for Mission-Critical AI/ })).toBeVisible();
    
    // Check if mobile menu button exists
    await expect(page.getByRole('button', { name: /Open menu/ })).toBeVisible();
  });

  test('page loads without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => {
      errors.push(error.message);
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Should not have critical errors
    expect(errors.length).toBe(0);
  });

  test('responsive design works across screen sizes', async ({ page }) => {
    // Test desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Precision for Mission-Critical AI/ })).toBeVisible();
    
    // Test tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    await expect(page.getByRole('heading', { name: /Precision for Mission-Critical AI/ })).toBeVisible();
    
    // Test mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await expect(page.getByRole('heading', { name: /Precision for Mission-Critical AI/ })).toBeVisible();
  });
});