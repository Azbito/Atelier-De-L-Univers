import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/Home.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Topics from '@/components/Topics';
import Card from '@/components/Card';
import Divider from '@/components/Divider';

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
            <p className={styles.typesDescription}>Anime? Realism? Expressionism? Anthropomorfic? Stick Man? It doesn't matter which group you are in, here is the land for the ones who want to enjoy the art.</p>
          </div>
        </div>
      </div>
      <Topics />

      <Divider />

      <div className={styles.cards}>
        <Card imageTitle='/images/services.png' imageAlt='Services' title='Services' description='In the Atelier, we can provide you with a bunch of content based on which artistic movement you are looking for. Be free to choose the art which you admire!' color='#FFFFFF' />

        <Card imageTitle='/images/donate.png' imageAlt='Donate' title='Donate' description='Help us to make this website alive. The money will be invested for the sake of the website.' backgroundColor='#6C5098' color='#FFFFFF' />

        <Card imageTitle='/images/support.png' imageAlt='Support' title='Support' description='Did you find any bugs? Getting troubles in the website? We can give you a hand by clicking this card!' backgroundColor='#DC5E5E' color='#FFFFFF' />
      </div>
    </div>
  )
}
