import DiscountQuotes, { type QuoteItem } from './DiscountQuotes';

const data: QuoteItem[] = [
  {
    title: 'Дистанційна консультація',
    description:
      'Онлайн консультація - зручний та ефективний спосіб отримати професійну правову допомогу у будь-якому місці перебування.',
    price: '550 грн',
  },
  {
    title: 'Консультація в офісі',
    description:
      'Особиста зустріч з адвокатом — можливість обговорити свої питання віч-на-віч та отримати глибоке розуміння ситуації.',
    price: 'від 950 грн',
  },
];

const App = () => {
  return <DiscountQuotes items={data} />;
};

export default App;
