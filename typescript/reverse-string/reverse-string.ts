class ReverseString {
  static reverse(message: string) {
    return message
      .split('')
      .reverse()
      .join('');
  }
}

export default ReverseString;
