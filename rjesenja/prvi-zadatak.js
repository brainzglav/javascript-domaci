function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function translate(text, translations) {
  const sentences = text.split(". ");

  const translatedSentences = sentences.map((sentence) => {
    const words = sentence.split(" ");
    const translatedWords = words.map((word, index) => {
      const translation = translations[word.toLowerCase()] || word;

      return index === 0 ? capitalize(translation) : translation;
    });

    return translatedWords.join(" ");
  });

  return translatedSentences.join(". ");
}

const TEXT =
  "Ivan je ucenik. Ucenje je njegova velika ljubav. Njegova svrha je ucenje. Ivan ima 150 IQ. Ivan sudjeluje u natjecanju do 150 IQ. Ivan je pametan. On je pobjednik.";
const BIKONJA = {
  ivan: "Bikonja",
  ucenik: "bik",
  ucenje: "korida",
  150: "850",
  iq: "kg",
  natjecanju: "razbadanju",
  pametan: "najjaci",
  pobjednik: "sampion",
};
const ZEKONJA = {
  ivan: "Zekonja",
  ucenik: "bik",
  ucenje: "korida",
  150: "650",
  iq: "kg",
  natjecanju: "razbadanju",
  pametan: "slabic",
  pobjednik: "luzercina",
};

console.log({
  first: translate(TEXT, BIKONJA),
  second: translate(TEXT, ZEKONJA),
});
