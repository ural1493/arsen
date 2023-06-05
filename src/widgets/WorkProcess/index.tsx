import Image from "next/image";

import s from './WorkProcess.module.scss';

type WorkProcess = {
  id: string | number,
  title: string,
  text: string,
  img: string,
}
const items: WorkProcess[] = [
  { id: 1, title: 'Шаг 1', text: 'Замер, обсуждение заказа', img: '/steps/1.jpg' },
  { id: 2, title: 'Шаг 2', text: 'Подготовка 3D модели будущей кухни', img: '/steps/2.jpg' },
  { id: 3, title: 'Шаг 3', text: 'Изготовление деталей кухни', img: '/steps/3.jpg' },
  { id: 4, title: 'Шаг 4', text: 'Установка кухни', img: '/steps/4.jpg' },
]

const WorkProcess = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.heading}>Процесс работы</h2>
        <div className={s.itemsContainer}>
          {items.map(({ id, img, text, title }) => (
            <div key={id} className={s.item}>
              <Image
                src={img}
                alt={text}
                width={250}
                height={200}
              />
              <div className={s.item_content}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess;
