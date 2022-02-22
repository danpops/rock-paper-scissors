export const getComputerMove = () => {
  return {
    0: 'R',
    1: 'P',
    2: 'S',
  }[Math.floor(Math.random() * 3)]
}
