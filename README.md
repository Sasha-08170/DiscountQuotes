# 🏷️ DiscountQuotes (React + TypeScript)

Компонент отображает **список услуг с ценами** в двух вариантах:

- 💻 **На десктопе** — в виде карточек.
- 📱 **На мобильных** — в виде аккордеона с плавной анимацией.

<img width="1920" height="401" alt="Screenshot_2025_09_20-4" src="https://github.com/user-attachments/assets/5e3ab957-a8d3-4446-8d48-cd668310367b" />
<img width="721" height="397" alt="Screenshot_2025_09_20-5" src="https://github.com/user-attachments/assets/0a5b56e8-0e53-4abf-90c4-0130cc7e403f" />

---

## 📂 Структура

- **`DiscountQuotes.tsx`** — React-компонент.
- **`DiscountQuotes.module.css`** — модульные стили (адаптив, анимации, оформление).

---

## ⚙️ Пропсы

```ts
export type QuoteItem = {
  title: string; // Заголовок услуги
  description: string; // Описание услуги
  price: string; // Цена
  note?: string; // Доп. пометка (например: "за 1 час")
};

type Props = {
  items: QuoteItem[]; // Список карточек/аккордеонов
};
```

---

## 🖼️ Визуализация

### 💻 Десктоп

- Отображает все элементы в **сетке карточек** (2 колонки).
- Каждая карточка включает:

  - Заголовок
  - Описание
  - Блок цены + дополнительную пометку

### 📱 Мобильный

- Отображается **аккордеон**.
- При клике на заголовок:

  - Блок плавно разворачивается (анимация max-height + opacity).
  - Иконка стрелочки (`FontAwesome`) поворачивается на 180°.

---

## 🧩 Основные элементы JSX

- **`cards`** — контейнер с карточками (desktop).
- **`accordion`** — список аккордеон-элементов (mobile).
- **`accordionHeader`** — кнопка-заголовок услуги.
- **`accordionContent`** — скрываемый блок с описанием и ценой.

---

## 🎨 Особенности стилей

- Градиентный фон карточек (`linear-gradient`).
- Плавные переходы при раскрытии/сжатии аккордеона.
- Иконка стрелочки с анимацией поворота.
- Адаптив:

  - ≥768px → карточки
  - <768px → аккордеон

---

## 🚀 Использование компонента

```tsx
import DiscountQuotes, { QuoteItem } from './DiscountQuotes';

const data: QuoteItem[] = [
  {
    title: 'Юридическая консультация',
    description: 'Помощь по кредитным вопросам',
    price: '500 грн',
    note: 'за 1 час',
  },
  {
    title: 'Сопровождение в суде',
    description: 'Полное юридическое сопровождение',
    price: '3000 грн',
    note: 'за одно заседание',
  },
];

export default function App() {
  return <DiscountQuotes items={data} />;
}
```
