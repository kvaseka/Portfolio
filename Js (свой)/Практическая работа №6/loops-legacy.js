let computer = {
  usbProtCount: 3,
  chipset: 'Intel core',
  coreCount: '3',
  videoCradModel: 'Intel(R) UHD Graphics 620',
  videoMemory: 4,
  ramType: 'DDR4',
  ramValume: 8192,
  price: 55000
};

for (let key in computer) {
  if (!computer.hasOwnProperty(key)) {
    continue;
  }
  console.log(computer[key]);
}