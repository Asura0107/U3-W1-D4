fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
  .then((resp) => resp.json())
  .then((negozio) => {
    console.log(negozio);
    negozio.forEach((stagione): any => {
      //   console.log(stagione);
      class Wear {
        prezzoivainclusa: number;
        saldo: number;

        constructor(_prezzoivainclusa: number, _saldo: number) {
          this.prezzoivainclusa = _prezzoivainclusa;
          this.saldo = _saldo;
        }
        getSaldoCapo() {
          return (this.prezzoivainclusa * this.saldo) / 100;
        }
        getAcquistoCapo() {
          let saldocapo = (this.prezzoivainclusa - this.saldo) / 100;
          return this.prezzoivainclusa - saldocapo;
        }
      }
      let wear1 = new Wear(stagione.prezzoivainclusa, stagione.saldo);
      console.log(stagione);
      // console.log(wear1.getSaldoCapo());
      console.log(
        `il prezzo di acquisto del capo è: ${wear1.getAcquistoCapo()}`
      );
    });
  });
