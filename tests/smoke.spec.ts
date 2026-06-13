import { test, expect } from '@playwright/test'

test.describe('Smoke', () => {
  test('homepage loads in English by default', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/\/en$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/artificial intelligence/i)
  })

  test('language switcher toggles to Polish', async ({ page }) => {
    await page.goto('/en')
    await page.locator('header a[href="/pl"]').first().click()
    await expect(page).toHaveURL(/\/pl(\/|$)/)
  })

  test('navigation to a subpage works', async ({ page }) => {
    await page.goto('/en')
    await page.getByRole('button', { name: /toggle menu/i }).click()
    await page.getByRole('link', { name: 'Produkty' }).first().click()
    await expect(page).toHaveURL(/\/produkty/)
  })

  test('contact form is accessible', async ({ page }) => {
    await page.goto('/en/kontakt')
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()
    await expect(page.getByRole('button', { name: /send|wyślij/i })).toBeVisible()
  })

  test('removed competence URLs redirect to home', async ({ page }) => {
    await page.goto('/en/kompetencje/llm')
    await expect(page).toHaveURL(/\/en$/)
  })

  test('skip to content link works', async ({ page }) => {
    await page.goto('/en')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
  })
})

test.describe('Accessibility', () => {
  test('key landmarks are present', async ({ page }) => {
    await page.goto('/en')
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('all images have alt text', async ({ page }) => {
    await page.goto('/en')
    for (const img of await page.locator('img').all()) {
      expect(await img.getAttribute('alt')).toBeTruthy()
    }
  })

  test('html lang attribute matches the active locale', async ({ page }) => {
    await page.goto('/en')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.goto('/pl')
    await expect(page.locator('html')).toHaveAttribute('lang', 'pl')
  })
})

test.describe('SEO', () => {
  test('homepage has a brillQ title and meta description', async ({ page }) => {
    await page.goto('/en')
    await expect(page).toHaveTitle(/brillQ/)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/)
  })

  test('sitemap.xml is served', async ({ page }) => {
    const res = await page.goto('/sitemap.xml')
    expect(res?.status()).toBe(200)
    expect(res?.headers()['content-type']).toContain('xml')
  })

  test('robots.txt is served', async ({ page }) => {
    const res = await page.goto('/robots.txt')
    expect(res?.status()).toBe(200)
  })
})
