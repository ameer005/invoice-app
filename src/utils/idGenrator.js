const idGenrator = () => {
  const alpha = [
    `A`,
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let id = "";

  for (let i = 0; i < 2; i++) {
    id += alpha[Math.floor(Math.random() * alpha.length)];
  }

  for (let i = 0; i < 4; i++) {
    {
      id += Math.floor(Math.random() * 9);
    }
  }

  return id;
};

export default idGenrator;
