input.onButtonPressed(Button.A, function () {
    Suma = 0
    for (let index = 0; index <= 1999; index++) {
        let list = 0
        Suma += Rutas[list]
        basic.showNumber(Suma)
    }
})
let Suma = 0
let Rutas: number[] = []
Rutas = [2000]
for (let index = 0; index <= 1999; index++) {
    Rutas[index] = 0
}
