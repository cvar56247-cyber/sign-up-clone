from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://localhost:5173")

    # Verifica que el botón "Registrarse" es un enlace con el atributo href correcto.
    register_button = page.locator('a[href="https://www.google.com"]')
    assert register_button.is_visible()

    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
