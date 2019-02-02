const add = (a,b) => {
    return a + b;
}
console.log(add(4,1)); // 5x`

let userHome = {
    name: 'Ghalib',
    location: ['Jakarta', 'Bogor', 'Bandung'],
    cetakHome(){
        this.location.forEach((kota) => {
            console.log(this.name + ' tinggal di Kota ' + kota)
        });
    }
}
userHome.cetakHome(); // Ghalib tinggal di kota Jakarta
                      // Ghalib tinggal di kota Bogor
                      // Ghalib tinggal di kota Bandung

const user = {
    name: 'Ghalib',
    location: ['Surabaya', 'Malang', 'Jogjakarta'],
    printLives(){
        return this.location.map((city) => this.name + ' ' + city);
    }
}
console.log(user.printLives()); // ["Ghalib Surabaya", "Ghalib Malang", "Ghalib Jogjakarta"]
console.log(user.printLives()[1]); // Ghalib Malang
