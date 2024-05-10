interface Device {
  serialNumber: string;
  brand: string;
}

type Laptop = {
  ram: number;
  cpu: string;
  display: string;
};

type LaptopDevice = Device & Laptop;

const device: LaptopDevice = {
  serialNumber: "KKA219J",
  brand: "LENOVO",
  cpu: "Intel",
  display: "IPS",
  ram: 16,
};

console.table(device);
