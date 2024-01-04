// write a class to calculate the uber price.
class UberPriceCalculator {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
    }
  
    calculatePrice() {
      const baseFare = 50;
      const farePerKm = 20;
      const farePerMinute = 2;
  
      const totalFare = baseFare + farePerKm * this.distance + farePerMinute * this.time;
      return totalFare;
    }
  }
  
  // Usage:
  const uberRide = new UberPriceCalculator(10, 20);                                 // Example: 10 km, 20 minutes
  const totalPrice = uberRide.calculatePrice();
  console.log(`Total Uber Fare: ${totalPrice.toFixed(2)}`);
  