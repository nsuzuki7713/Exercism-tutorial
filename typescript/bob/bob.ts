class Bob {
  hey(text: string) {
    const phrase = text.trim();
    if (phrase.length === 0) {
      return 'Fine. Be that way!';
    }
    if (
      phrase.toLocaleUpperCase() === phrase &&
      phrase.toLocaleLowerCase() !== phrase
    ) {
      if (phrase.endsWith('?')) {
        return "Calm down, I know what I'm doing!";
      }
      return 'Whoa, chill out!';
    }
    if (phrase.endsWith('?')) {
      return 'Sure.';
    }
    return 'Whatever.';
  }
}

export default Bob;
