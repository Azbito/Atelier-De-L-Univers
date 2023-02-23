import Image from "next/image"
import Divider from "../Divider"
import styles from './topics.module.scss'

export default function Topics() {

  const topics = [{
    id: 1,
    image: "/images/anime.jpg",
    imageAlt: "Anime",
    title: "Anime"
  },
  {
    id: 2,
    image: "/images/cartoon.jpg",
    imageAlt: "Cartoon",
    title: "Cartoon"
  },
  {
    id: 3,
    image: "/images/abstractionism.jpeg",
    imageAlt: "Abstractionism",
    title: "Abstractionism"
  },
  {
    id: 4,
    image: "/images/anthropomorphism.jpg",
    imageAlt: "Anthropomorphism",
    title: "Anthropomorphism"
  },
  {
    id: 5,
    image: "/images/cubism.jpg",
    imageAlt: "Cubism",
    title: "Cubism"
  },
  {
    id: 6,
    image: "/images/dadaism.jpeg",
    imageAlt: "Dadaism",
    title: "Dadaism"
  }, {
    id: 7,
    image: "/images/expressionism.jpg",
    imageAlt: "Expressionism",
    title: "Expressionism"
  }, {
    id: 8,
    image: "/images/futurism.jpg",
    imageAlt: "Futurism",
    title: "Futurism"
  }, {
    id: 9,
    image: "/images/impressionism.jpg",
    imageAlt: "Impressionism",
    title: "Impressionism"
  },
  {
    id: 10,
    image: "/images/realism.jpg",
    imageAlt: "Realism",
    title: "Realism"
  },
  {
    id: 11,
    image: "/images/surrealism.jpg",
    imageAlt: "Surrealism",
    title: "Surrealism"
  },
  {
    id: 12,
    image: "/images/pointillism.jpg",
    imageAlt: "Pointillism",
    title: "Pointillism"
  },
  {
    id: 13,
    image: "/images/lineart.jpg",
    imageAlt: "Lineart",
    title: "Lineart"
  },
  {
    id: 14,
    image: "/images/hachure.jpg",
    imageAlt: "Hachure",
    title: "Hachure"
  }
  ]

  return (
    <div>
      <p className={styles.categoriesTitle}>Categories</p>
      <Divider />
      <div className={styles.container} onClick={() => alert("Please stand-by. I'm still growing.")}>
        {topics.map((item) => (
          <div key={item.id}>
            <img className={styles.artMovimentImage} src={item?.image} alt={item?.imageAlt} />
            <h1 className={styles.artMovimentTitle}>{item?.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}