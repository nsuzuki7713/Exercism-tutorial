export default function transform(old: { [key: string]: string[] }) {
  let result: { [key: string]: number } = {};
  Object.keys(old).forEach(key => {
    old[key].forEach(v => {
      result[v.toLowerCase()] = Number(key);
    });
  });

  return result;
}
