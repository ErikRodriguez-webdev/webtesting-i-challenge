module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    const newEnhancement = item.enhancement + 1;
    return { ...item, enhancement: newEnhancement };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement === 15) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
