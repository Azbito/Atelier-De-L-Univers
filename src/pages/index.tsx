import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Atelier de L'Univers</h1>
      <div className={styles.carousel}>
        <Carousel autoPlay interval={2000} axis="horizontal">
          <div>
            <Image className={styles.image} src="/images/banner.jpg" alt="Mountains" width={800} height={417} />
          </div>
          <div>
            <Image className={styles.image} src="/images/abstract_painting.jpg" alt="Abstract Painting" width={800} height={417} />
          </div>
          <div>
            <Image className={styles.image} src="/images/colorful_painting.jpg" alt="Colorful Painting" width={800} height={417} />
          </div>
          <div>
            <Image className={styles.image} src="/images/foliage.jpg" alt="Foliage" width={800} height={417} />
          </div>
        </Carousel>
      </div>
      <div>
        <h1 className={styles.subtitle}>Art is in everywhere!</h1>
        <div className={styles.description}>
          <p>What about a place where you can enjoy with another artist? A place where you imagination flows like the water falling in the waterfalls. Here you dream comes true.</p>
        </div>
        <div>
          <div className={styles.content}>
            <h1 className={styles.typesSubtitle}>Types of Art?</h1>
            <p className={styles.typesDescription}>Anime? Realism? Expressionism? Anthropomorfic? Stick Man? It doesn't matter which group you are in, here we are the land for the ones who want to enjoy the art</p>
          </div>
        </div>
      </div>
    </div>
  )
}
