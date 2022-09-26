import NextImage from 'next/image'
import styles from '../styles/Image.module.css'

export default function OwnImage({path, alt}) {
  return (
    <>
      <div className={styles.imageContainer}>
        <NextImage src={path} alt={alt}  layout='fill' className={styles.image}></NextImage>
      </div>
    </>
  )
}
