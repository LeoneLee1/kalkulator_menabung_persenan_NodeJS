const express = require("express");

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("\n====================================");
  console.log("Tertawa Tapi Terluka😹 info! port nya 3000 yaa kawann");
  console.log("====================================\n");
});

app.post("/hitung", (req, res) => {
  const persen = parseFloat(req.body.persen) / 100;
  const total_uang = parseFloat(req.body.total_uang);

  if (isNaN(persen) || isNaN(total_uang)) {
    console.log("\nError: Input persen atau total uang tidak valid.");
    return res.status(400).json({
      message: "Input persen atau total uang tidak valid.",
      status: 400,
    });
  }

  const total_menabung = total_uang * persen;
  const nabung = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(total_menabung);

  console.log("\n====================================");
  console.log(`Jumlah total uang yang akan ditabung: ${nabung}`);
  console.log("====================================\n");

  return res.json({
    message: `Jumlah total uang yang akan ditabung: ${nabung}`,
    status: 200,
  });
});
