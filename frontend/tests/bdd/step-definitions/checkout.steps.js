/* global process */

import { BeforeAll, AfterAll, Before, After, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.env.E2E_BASE_URL || 'http://127.0.0.1:5173';
const evidenceDir = path.resolve('test-results/evidence');

setDefaultTimeout(60000);

let viteProcess;
let browser;
let page;

async function waitForServer(url, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Vite may still be starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Vite did not start at ${url}`);
}

async function capture(name) {
  await page.screenshot({
    path: path.join(evidenceDir, `${name}.png`),
    fullPage: true,
  });
}

BeforeAll(async function () {
  await fs.mkdir(evidenceDir, { recursive: true });

  if (!process.env.E2E_BASE_URL) {
    viteProcess = spawn('npm', ['run', 'dev', '--', '--host', '127.0.0.1'], {
      stdio: 'ignore',
      shell: process.platform === 'win32',
    });
    await waitForServer(baseUrl);
  }

  browser = await chromium.launch();
});

AfterAll(async function () {
  await browser?.close();

  if (viteProcess) {
    viteProcess.kill();
  }
});

Before(async function () {
  page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(baseUrl);
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
});

After(async function () {
  await page?.close();
});

Given('el cliente esta en el catalogo de libros', async function () {
  await page.goto(`${baseUrl}/books`);
  await expect(page.getByRole('heading', { name: 'Nuestros libros' })).toBeVisible();
  await capture('01-catalogo');
});

When('busca el libro {string}', async function (bookTitle) {
  await page.getByLabel('Buscar por titulo').fill(bookTitle);
  await expect(page.getByRole('heading', { name: bookTitle })).toBeVisible();
  await capture('02-busqueda-libro');
});

When('abre el detalle del libro', async function () {
  await page.getByRole('link', { name: 'Ver detalle' }).click();
  await expect(page.getByRole('heading', { name: 'La biblioteca sumergida' })).toBeVisible();
  await capture('03-detalle-libro');
});

When('anade el libro al carrito', async function () {
  await page.getByRole('button', { name: 'Anadir al carrito' }).click();
  await expect(page.getByRole('heading', { name: /item\(s\) en tu carrito/i })).toBeVisible();
  await capture('04-carrito');
});

When('va al checkout', async function () {
  await page.getByRole('link', { name: 'Ir al checkout' }).click();
  await page.waitForTimeout(500);
});

When('inicia sesion con el usuario mock si es necesario', async function () {
  const loginHeading = page.getByRole('heading', { name: 'LoginPage' });

  if (await loginHeading.isVisible().catch(() => false)) {
    await page.getByRole('button', { name: 'Entrar en mi perfil' }).click();
    await page.waitForLoadState('networkidle');
  }

  if (!page.url().includes('/checkout')) {
    await page.goto(`${baseUrl}/checkout`);
  }

  await expect(page.getByRole('heading', { name: 'CheckoutPage' })).toBeVisible();
  await capture('05-checkout');
});

When('confirma el pedido', async function () {
  page.once('dialog', async (dialog) => {
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Confirmar pedido' }).click();
});

Then('el pedido queda confirmado y el cliente vuelve al catalogo', async function () {
  await expect(page).toHaveURL(/\/books$/);
  await expect(page.getByRole('heading', { name: 'Nuestros libros' })).toBeVisible();
  await capture('06-pedido-confirmado');
});
