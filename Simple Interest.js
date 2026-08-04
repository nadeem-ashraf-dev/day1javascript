let units = 150; // Change this value

let bill = 0;

if (units <= 50) {
    bill = units * 25; // Rs. 25 per unit
} else if (units <= 100) {
    bill = (50 * 25) + ((units - 50) * 35); // Rs. 35 per unit
} else if (units <= 200) {
    bill = (50 * 25) + (50 * 35) + ((units - 100) * 45); // Rs. 45 per unit
} else if (units <= 300) {
    bill = (50 * 25) + (50 * 35) + (100 * 45) + ((units - 200) * 55); // Rs. 55 per unit
} else if (units <= 400) {
    bill = (50 * 25) + (50 * 35) + (100 * 45) + (100 * 55) + ((units - 300) * 65); // Rs. 65 per unit
} else {
    bill = (50 * 25) + (50 * 35) + (100 * 45) + (100 * 55) + (100 * 65) + ((units - 400) * 75); // Rs. 75 per unit
}

console.log("Total Units Consumed:", units);
console.log("Electricity Bill (without taxes):", bill, "PKR");

// Additional taxes (approx 17% GST + other charges)
const gst = bill * 0.17;
const otherCharges = bill * 0.05;
const totalBill = bill + gst + otherCharges;

console.log("GST (17%):", gst, "PKR");
console.log("Other Charges (5%):", otherCharges, "PKR");
console.log("Total Bill (with taxes):", totalBill, "PKR");