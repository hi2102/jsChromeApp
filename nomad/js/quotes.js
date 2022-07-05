const quotes = [
  {
    quote: '진정한 예술은 창조적인 예술가의 견딜 수 없는 충동에 의해 생긴다. ',
    author: '- 알버트 아인슈타인'
  },
  {
    quote: '나는 상상력을 자유롭게 이용하는 데 부족함이 없는 예술가다. 지식보다 중요한 것은 상상력이다. 지식은 한계가 있다. 하지만 상상력은 세상의 모든 것을 끌어안는다.',
    author: '- 알버트 아인슈타인'
  },
  {
    quote: '바보의 뇌는 철학을 바보짓으로, 과학을 미신으로, 예술을 규칙으로 바꾼다. 그것이 대학교육이다.',
    author: '- 조지 버나스 쇼'
  },
  {
    quote: '예술의 목적은 사물의 외관이 아닌 내적인 의미를 보여주는 것이다.',
    author: '- 아리스토텔레스'
  },
  {
    quote: '예술과 사랑을 하기에는 인생이 짧다.',
    author: '- 윌리엄 서머셋 모옴'
  },
  {
    quote: '예술은 표절 아니면 혁명이다.',
    author: '- 폴 고갱'
  },
  {
    quote: '땅은 진정 최고의 예술이다.',
    author: '- 앤디 워홀'
  },
  {
    quote: '예술은 당신이 일상을 벗어날 수 있는 모든 것이다.',
    author: '- 앤디 워홀'
  },
  {
    quote: '예술가는 사람들이 가질 필요가 없는 것들을 생산하는 사람이다.',
    author: '- 앤디 워홀'
  },
  {
    quote: '돈을 버는 것은 예술이고, 일하는 것도 예술이며, 훌륭한 사업이야말로 가장 뛰어난 예술이다.',
    author: '- 앤디 워홀'
  },
  {
    quote: '진실하며 권위 있는 예술가는 예술의 진실성을 찾기 위해 부단히 노력한다. 반면, 본능에 의지하는 무법상태의 예술가는 자연스러움만을 좇는다. 전자는 예술의 정점에 이르며, 후자는 바닥으로 떨어지기 마련이다.',
    author: '- 요한 보르강 폰 괴테'
  },
  {
    quote: '나는 돈을 벌기 위해 사업을 시작했고, 거기서 예술이 나왔다. 사람들이 이 말에 환멸을 느껴도 어쩔 수 없다. 진실이니까.',
    author: '- 찰리 채플린'
  }
];

const quote = document.querySelector('#quote div:first-child');
const author = document.querySelector('#quote div:last-child');

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;