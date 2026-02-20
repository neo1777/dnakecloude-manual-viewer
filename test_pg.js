import puppeteer from 'puppeteer';
import fs from 'fs';

const html = `
<!DOCTYPE html>
<html>
<head>
<style>
  @page { margin: 15mm; size: A4; }
  body { font-family: sans-serif; counter-reset: page_counter; }
  .print-table { width: 100%; border-collapse: collapse; }
  .print-head { display: table-header-group; }
  .print-foot { display: table-footer-group; }
  .content { font-size: 16px; line-height: 1.5; }
  .spacer { height: 1500px; background: linear-gradient(to bottom, #fee, #eef); }
  .page-num::after { counter-increment: page_counter; content: counter(page_counter); }
  .page-num-native::after { content: counter(page); }
</style>
</head>
<body>
  <table class='print-table'>
    <thead class='print-head'>
      <tr><td><div>HEADER</div></td></tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class='content'>
            <h1>Start</h1>
            <div class='spacer'></div>
            <h1>End</h1>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot class='print-foot'>
      <tr><td><div>Footer - Custom: <span class='page-num'></span> | Native: <span class='page-num-native'></span></div></td></tr>
    </tfoot>
  </table>
</body>
</html>
`;
fs.writeFileSync('test_pg.html', html);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + process.cwd() + '/test_pg.html', { waitUntil: 'networkidle0' });
    await page.pdf({ path: 'test_pg.pdf', format: 'A4' });
    await browser.close();
    console.log('PDF Generated!');
})();
