const { execSync } = require('child_process');
const readline = require('readline');

// Mapping nomor ke file
const scripts = {
  1: '1ath.js',
  2: '2usde.js',
  3: '3lvlusd.js',
  4: '4virtual.js',
  5: '5vana.js',
  6: '6ai16z.js',
  7: '7usdOne.js',
  8: '80g.js',
};

// Buat interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt ke user (pakai template literal untuk multiline yang bersih)
rl.question(`
Pilih script yang mau dijalankan:
  1. ATH
  2. USDE
  3. LEVELUSD
  4. VIRTUAL
  5. VANA
  6. AI16Z
  7. USD1
  8. 0G

Masukkan pilihan (1-8): `, (answer) => {
  const scriptNumber = parseInt(answer.trim(), 10);
  
  if (scripts[scriptNumber]) {
    console.log(`Menjalankan ${scripts[scriptNumber]}...`);
    try {
      execSync(`node ${scripts[scriptNumber]}`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Error saat menjalankan ${scripts[scriptNumber]}:`, error.message);
    }
  } else {
    console.log('Pilihan tidak valid. Silakan pilih angka 1-8.');
  }

  rl.close();
});
