class TwelveDays {
  static recite(startDay: number, endDay: number) {
    const days = [
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
      'seventh',
      'eighth',
      'ninth',
      'tenth',
      'eleventh',
      'twelfth'
    ];
    const gifts = [
      'a Partridge in a Pear Tree.\n',
      'two Turtle Doves, and ',
      'three French Hens, ',
      'four Calling Birds, ',
      'five Gold Rings, ',
      'six Geese-a-Laying, ',
      'seven Swans-a-Swimming, ',
      'eight Maids-a-Milking, ',
      'nine Ladies Dancing, ',
      'ten Lords-a-Leaping, ',
      'eleven Pipers Piping, ',
      'twelve Drummers Drumming, '
    ];

    let lyrics = '';
    for (let day = startDay - 1; day <= endDay - 1; day++) {
      lyrics += `On the ${
        days[day]
      } day of Christmas my true love gave to me: `;

      for (let giftIndex = day; giftIndex >= 0; giftIndex--) {
        lyrics += gifts[giftIndex];
      }
    }

    return lyrics;
  }
}

export default TwelveDays;
