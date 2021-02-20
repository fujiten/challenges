const printAndReturnString = (word: string): string => {
  console.log(word)
  return word
} 

const isMoreThan100 = (num: number): Boolean => {
  return (num > 100)
}

const pickBiggerNumber = (num1: number, num2: number): number => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}
