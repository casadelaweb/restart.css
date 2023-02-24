import fs, { unlink } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distFolder = path.resolve(__dirname, 'dist');

function deleteFiles() {
  const files = fs.readdirSync(distFolder).filter((file) => {
    return file.endsWith('.js');
  });
  files.forEach((file) => {
    unlink(distFolder + '/' + file, (error) => {
      if (error) throw error;
      console.log(file + ' has been deleted');
    });
  });
}

function createFiles() {
  // fs.open('index.js', 'w', (err) => {
  //   if (err) throw err;
  //   console.log('File created');
  // });
  fs.writeFile(distFolder + '/index.js', 'import "./restyle.css";', (err) => {
    if (err) throw err;
  });
  fs.writeFile(distFolder + '/checkboxes.js', 'import "./checkboxes.css";', (err) => {
    if (err) throw err;
  });
  fs.writeFile(distFolder + '/scrollbar.js', 'import "./scrollbar.css";', (err) => {
    if (err) throw err;
  });
  fs.writeFile(distFolder + '/margins.js', 'import "./margins.css";', (err) => {
    if (err) throw err;
  });

  let bundleContent = `
  import "./restyle.css";
  import "./checkboxes.css";
  import "./scrollbar.css";
  import "./margins.css";
  `;
  bundleContent = bundleContent.replace(/\s/gmi, '');
  fs.writeFile(distFolder + '/bundle.js', bundleContent, (err) => {
    if (err) throw err;
  });
}

new Promise((resolve) => {
  deleteFiles();
  resolve();
}).then(createFiles);


console.log('completed.');

