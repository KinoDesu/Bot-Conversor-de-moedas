const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')

console.log("Bem vindo ao Bot conversor! 🤖");

async function robo() {

    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';
    const qualquerUrl = `https://www.google.com/search?client=opera-gx&q=${moedaBase}+para+${moedaFinal}&sourceid=opera&ie=UTF-8&oe=UTF-8`

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(qualquerUrl);

    const resultado = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value;
    });


    console.log(`o valor de  1 ${moedaBase} em ${moedaFinal} é ${resultado}`)

    browser.close();
}

robo();