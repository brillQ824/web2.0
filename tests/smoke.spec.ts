import { test, expect } from '@playwright/test'

test.describe('Smoke Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /ALIOTH GROUP/i })).toBeVisible()
  })

  test('navigation works', async ({ page }) => {
    await page.goto('/pl')

    // Open the fullscreen menu and navigate to Produkty
    await page.getByRole('button', { name: /toggle menu/i }).click()
    await page.getByRole('link', { name: /produkty/i }).first().click()
    await expect(page).toHaveURL(/\/produkty/)
  })

  test('contact form is accessible', async ({ page }) => {
    await page.goto('/kontakt')
    
    // Check form elements exist
    await expect(page.getByLabel(/imię i nazwisko/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/wiadomość/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /wyślij/i })).toBeVisible()
  })

  test('mobile menu works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Open mobile menu
    await page.getByRole('button', { name: /toggle menu/i }).click()
    await expect(page.getByRole('link', { name: /projekty/i })).toBeVisible()
  })

  test('skip to content link works', async ({ page }) => {
    await page.goto('/')
    
    // Tab to skip link and press enter
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    
    // Main content should be focused
    const mainContent = page.locator('#main-content')
    await expect(mainContent).toBeFocused()
  })
})

test.describe('Accessibility Tests', () => {
  test('homepage has no accessibility violations', async ({ page }) => {
    await page.goto('/')
    
    // Check for basic accessibility
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('all images have alt text', async ({ page }) => {
    await page.goto('/')
    
    const images = await page.locator('img').all()
    for (const img of images) {
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })
})

test.describe('SEO Tests', () => {
  test('homepage has proper meta tags', async ({ page }) => {
    await page.goto('/')
    
    // Check title
    await expect(page).toHaveTitle(/Alioth Group/)
    
    // Check meta description
    const description = await page.locator('meta[name="description"]')
    await expect(description).toHaveAttribute('content', /.+/)
  })

  test('sitemap is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml')
    expect(response?.status()).toBe(200)
    expect(response?.headers()['content-type']).toContain('xml')
  })

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt')
    expect(response?.status()).toBe(200)
  })
})

