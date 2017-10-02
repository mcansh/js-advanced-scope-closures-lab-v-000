const produceDrivingRange = range => (beginning, ending) => {
  const blockRange = parseFloat(ending) - parseFloat(beginning);
  const totalRange = range - blockRange;
  if (totalRange > 0) {
    return `within range by ${totalRange}`;
  }
  return `${Math.abs(totalRange)} blocks out of range`;
};

const produceTipCalculator = percent => fareAmount => fareAmount * percent;

const createDriver = () => {
  let driverId = 0;
  return class {
    constructor(name) {
      driverId += 1;
      this.name = name;
      this.id = driverId;
    }
  };
};
