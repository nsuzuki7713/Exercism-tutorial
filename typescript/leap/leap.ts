function isLeapYear(year: number): boolean {
  // うるう年の判定
  // https://support.microsoft.com/ja-jp/help/214019/method-to-determine-whether-a-year-is-a-leap-year
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && year % 400 !== 0) return false;
  return true;
}

export default isLeapYear;
