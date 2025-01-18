const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingin Menabung Berapa Persen? (tanpa %): ", (answer1) => {
  rl.question("Berapa total uang Anda sekarang? : ", (answer2) => {
    const persen = parseFloat(answer1) / 100;
    const total_uang = parseFloat(answer2);

    if (isNaN(persen) || isNaN(total_uang)) {
      console.log("\nInput harus berupa angka! Mohon coba lagi.");
    } else {
      const total_menabung = total_uang * persen;
      const formattedTotal = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(total_menabung);

      console.log("\n=========================");
      console.log(`Anda akan menabung sebanyak: ${formattedTotal}`);
      console.log("=========================\n");
    }
    rl.close();
  });
});
