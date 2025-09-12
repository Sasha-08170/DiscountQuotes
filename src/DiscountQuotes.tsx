import React, { useState, useRef, useEffect } from 'react';
import styles from './DiscountQuotes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// ==== Типы данных ====

// Один элемент цитаты/услуги
export type QuoteItem = {
  title: string; // Заголовок услуги
  description: string; // Описание услуги
  price: string; // Цена
  note?: string; // Доп. пометка (например: "за 1 час" или "*скидка")
};

// Пропсы для компонента
type Props = {
  items: QuoteItem[]; // Список карточек/аккордеонов
};

const DiscountQuotes: React.FC<Props> = ({ items }) => {
  // Храним индекс активного аккордеона (null = закрыто всё)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Ссылки на DOM-элементы для контента аккордеона
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Функция переключения аккордеона
  const toggleAccordion = (index: number) => {
    // Если уже открыт этот блок → закрыть, иначе открыть новый
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Управление анимацией открытия/закрытия аккордеона
  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (el) {
        if (activeIndex === idx) {
          // Если блок активен → раскрываем
          el.style.maxHeight = el.scrollHeight + 'px'; // Высота по содержимому
          el.style.opacity = '1'; // Прозрачность 100%
          el.style.padding = '16px 18px'; // Внутренние отступы
        } else {
          // Если блок НЕ активен → скрываем
          el.style.maxHeight = '0px';
          el.style.opacity = '0';
          el.style.padding = '0 18px'; // Схлопываем padding
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      {/* === Вариант для десктопа (карточки) === */}
      <div className={styles.cards}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.card}>
            {/* Заголовок услуги */}
            <h3 className={styles.title}>{item.title}</h3>

            {/* Описание услуги */}
            <p className={styles.desc}>{item.description}</p>

            {/* Цена и заметка */}
            <div className={styles.priceBlock}>
              <span className={styles.price}>{item.price}</span>
              {item.note && <span className={styles.note}>{item.note}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* === Вариант для мобильных (аккордеон) === */}
      <div className={styles.accordion}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.accordionItem}>
            {/* Заголовок аккордеона */}
            <button className={styles.accordionHeader} onClick={() => toggleAccordion(idx)}>
              <span>{item.title}</span>
              {/* Иконка стрелочки (меняет направление при открытии) */}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${styles.icon} ${activeIndex === idx ? styles.iconActive : ''}`}
              />
            </button>

            {/* Контент аккордеона (описание + цена) */}
            <div ref={(el) => (contentRefs.current[idx] = el)} className={styles.accordionContent}>
              <p>{item.description}</p>
              <div className={styles.priceBlock}>
                <span className={styles.price}>{item.price}</span>
                {item.note && <span className={styles.note}>{item.note}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountQuotes;
