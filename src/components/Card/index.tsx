import Image from 'next/image'
import styles from './card.module.scss'

type CardProps = {
  imageTitle: string,
  imageAlt: string,
  title: string,
  description: string,
  backgroundColor?: string,
  color?: string
}

export default function Card({ imageTitle, imageAlt, title, description, backgroundColor, color }: CardProps) {
  return (
    <div className={styles.container} style={{ backgroundColor }} onClick={() => alert("Please stand-by. I'm still growing.")}>
      <Image src={imageTitle} alt={imageAlt} width={100} height={100} />
      <div className={styles.info}>
        <h1 className={styles.title} style={{ color }}>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}