class App {
  constructor() {
    this.carContainerElement = document.getElementById("mobilterpilih");
    this.inactiveBg = inactiveBg();
  }

  async init() {
    await this.load();
    this.run();
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.className = "col-4";
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    this.clear();
    const penumpang = document.getElementById("inputPenumpang");
    const date = document.getElementById("inputTanggal");
    const time = document.getElementById("inputWaktu");
    const jumlahKursi = penumpang.value;
    const tanggal = date.value;
    const waktu = time.value;
    let tanggalWaktu = tanggal + "T" + waktu + "Z";
    let cars = [];
    cars = await Binar.listCars();
    document.getElementById("background").style.width = "0";

    if (waktu == "" || tanggal == "") {
      alert("Lengkapi Form yang ada!");
    }

    let filteredCars = cars.filter((car) => {
      if (jumlahKursi === "") {
        return (
          car.available === true && Date.parse(car.availableAt) > Date.parse(tanggalWaktu)
        );
      } else {
        return (
          car.available === true &&
          Date.parse(car.availableAt) > Date.parse(tanggalWaktu) && car.capacity >= jumlahKursi 
        );
      }
    });
    Car.init(filteredCars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
