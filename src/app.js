let pronoun = ["the", "our", "my", "your"];
let adj = ["great", "big", "super", "fast"];
let noun = ["jogger", "raccoon", "runner", "panda"];
let extensions = [".com", ".net", ".us", ".io"];

let generateDomains = (pronouns, adjectives, nouns, extensions) => {
  let domains = [];
  for (let p of pronouns) {
    for (let a of adjectives) {
      for (let n of nouns) {
        for (let ext of extensions) {
          domains.push(`${p}${a}${n}${ext}`);
        }
      }
    }
  }
  return domains;
};

let domains = generateDomains(pronoun, adj, noun, extensions);
domains.forEach(domain => console.log(domain));
