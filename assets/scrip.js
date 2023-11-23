fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
    .then(function (resp) { return resp.json(); })
    .then(function (negozio) {
    console.log(negozio);
    negozio.forEach(function (stagione) {
        //   console.log(stagione);
        var Wear = /** @class */ (function () {
            function Wear(_prezzoivainclusa, _saldo) {
                this.prezzoivainclusa = _prezzoivainclusa;
                this.saldo = _saldo;
            }
            Wear.prototype.getSaldoCapo = function () {
                return (this.prezzoivainclusa * this.saldo) / 100;
            };
            Wear.prototype.getAcquistoCapo = function () {
                var saldocapo = (this.prezzoivainclusa - this.saldo) / 100;
                return this.prezzoivainclusa - saldocapo;
            };
            return Wear;
        }());
        var wear1 = new Wear(stagione.prezzoivainclusa, stagione.saldo);
        console.log(stagione);
        // console.log(wear1.getSaldoCapo());
        console.log("il prezzo di acquisto del capo \u00E8: ".concat(wear1.getAcquistoCapo()));
    });
});
