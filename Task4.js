class DescriptiveStatistics {
    constructor(data) {
      this.data = data.sort((a, b) => a - b); // Sorting data for median and quartiles
    }
  
    calculateMean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    calculateMedian() {
      const mid = Math.floor(this.data.length / 2);
      return this.data.length % 2 === 0
        ? (this.data[mid - 1] + this.data[mid]) / 2
        : this.data[mid];
    }
  
    calculateMode() {
      const frequencyMap = new Map();
      this.data.forEach((value) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let maxFrequency = 0;
      let modes = [];
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          modes = [value];
          maxFrequency = frequency;
        } else if (frequency === maxFrequency) {
          modes.push(value);
        }
      });
  
      return modes;
    }
 
    calculateRange() {
      return this.data[this.data.length - 1] - this.data[0];
    }
  
    calculateVariance() {
      const mean = this.calculateMean();
      const squaredDifferences = this.data.map((value) => Math.pow(value - mean, 2));
      return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
    }
  
    calculateStandardDeviation() {
      return Math.sqrt(this.calculateVariance());
    }
  
    calculateSkewness() {
      const mean = this.calculateMean();
      const standardDeviation = this.calculateStandardDeviation();
      const cubedDifferences = this.data.map((value) => Math.pow((value - mean) / standardDeviation, 3));
      return (
        cubedDifferences.reduce((acc, value) => acc + value, 0) / this.data.length
      );
    }
  
    calculateKurtosis() {
      const mean = this.calculateMean();
      const standardDeviation = this.calculateStandardDeviation();
      const fourthPowerDifferences = this.data.map((value) => Math.pow((value - mean) / standardDeviation, 4));
      return (
        fourthPowerDifferences.reduce((acc, value) => acc + value, 0) / this.data.length
      );
    }
  }
  
  const data = [3, 4, 5, 5, 5, 8, 9, 10, 12, 14, 16];
  const stats = new DescriptiveStatistics(data);
  
  console.log(data);
  console.log('Mean:', stats.calculateMean());
  console.log('Median:', stats.calculateMedian());
  console.log('Mode:', stats.calculateMode());
  console.log('Range:', stats.calculateRange());
  console.log('Variance:', stats.calculateVariance());
  console.log('Standard Deviation:', stats.calculateStandardDeviation());
  console.log('Skewness:', stats.calculateSkewness());
  console.log('Kurtosis:', stats.calculateKurtosis());
  