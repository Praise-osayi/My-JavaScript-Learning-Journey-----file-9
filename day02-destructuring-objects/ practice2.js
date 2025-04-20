"use strict"



function deliverFruits({destination, quantity, name}) {
  console.log(`Delivering ${quantity} ${name} to ${destination}`)
}

deliverFruits({
  name: "Pineapple",
  quantity: 10,
  destination: "Main Street Market"
});