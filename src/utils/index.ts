export const prepareData = (data: { [key: string]: number }): number[][] =>
  Object.keys(data).reduce((prevKeys: number[][], currentKey: string) => {
    if (data[currentKey] === 0) return prevKeys;
    return [...prevKeys, [parseInt(currentKey), data[currentKey]]];
  }, []);
