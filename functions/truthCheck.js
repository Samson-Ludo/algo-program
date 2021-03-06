function truthCheck(collection, pre) {
  return collection.every(
    (element) => element.hasOwnProperty(pre) && Boolean(element[pre])
  );
}
console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastForward", onBoat: true },
    ],
    "onBoat"
  )
);
