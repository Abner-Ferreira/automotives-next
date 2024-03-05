'use client'
import React from 'react'
import styles from './videos.module.css'

export default function Videos() {
  return (
    <>
      <main className={styles.containerVideos}>

        <h1>BASF 4 MOBILITY</h1>
        <h4>A vida sempre pede mudanças e, para isso, a maneira como nos movemos também precisa mudar. A partir desta premissa, surge o VideoCast BASF 4Mobility. Um programa de 4 episódios com convidados especiais e formadores de opinião, no qual provocamos conversas sobre os desafios e tendências que impactam o ecossistema da mobilidade e como a conexão pode desenhar o futuro. <b>Confira os episódios:</b></h4>

        <div className={styles.gridVideos}>

          <section className={styles.videos}>
          <iframe className="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/JXrxVbdiX30?si=1OwWn2kf5N6gAv4m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen id={styles.videosMobility}></iframe>
          </section>
          <section className={styles.videos}>
            <iframe className="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/ebw5eSnSgD8?si=7SyBZdTLXq5eGGZy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen id={styles.videosMobility}></iframe>
          </section>
          <section className={styles.videos}>
            <iframe className="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/aEuhsaEFOUQ?si=YT2Rw21cGjWa3UQ7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen id={styles.videosMobility}></iframe>
          </section>
          <section className={styles.videos}>
            <iframe className="embed-responsive-item optanon-category-C0023" src="https://www.youtube.com/embed/YDKE202NbhI?si=RlNyse2qBn8FrNMC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen id={styles.videosMobility}></iframe>
          </section>
        </div>

      </main>
    </>
  )
}
