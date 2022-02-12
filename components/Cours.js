import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Cours.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import { resolveHref } from "next/dist/next-server/lib/router/router"

// const resolveDirectors = {
//   en: 'Directors',
//   nl: 'Regisseurs',
// }

// const resolveWriters = {
//   en: 'Writers',
//   nl: 'Schrijvers',
// }

// const resolveStars = {
//   en: 'Stars',
//   nl: 'Sterren',
// }

// const resolveMerchandise = {
//   en: 'Merchandise',
//   nl: 'Producten',
// }

// const resolveNews = {
//   en: 'News',
//   nl: 'Nieuws',
// }
const resolveGames = {
  en: 'Games',
  nl: 'Spellen',
  fr: 'Jeux',
}

const Cours = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
  }else {
    var content = data;
  }
  const [chapitress, setChapitress] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'chapitre', 'movies').then(
    function (result) {
      setChapitress(result.data.stories);
    });
  // const [products, setProducts] = useState([]);
  // getData(data.story.uuid, locale, content.preview = false, 'product', 'game').then(
  //   function (result) {
  //     setProducts(result.data.stories);
  //   });

  // const [newsitems, setNewsitems] = useState([]);
  // getData(data.story.uuid, locale, content.preview = false, 'newsitem', 'game').then(
  //   function (result) {
  //     setNewsitems(result.data.stories);
  //   });

  
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.cours}>
          <h1 className={styles.title}>
            {content.title} 
            <div className={styles.credits}>
            ECTS:{content.credits}
            </div>
          </h1>
          <div className={styles.description}>
            {render(content.description)}
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          {/* <div className={styles.cours}>
        {games && games.length > 0 && <SmallCardList items={games} title={resolveGames[locale]} type='game'></SmallCardList>}
        </div> */}
          {/* <div className={styles.links}>
              <a href={""}>VISIT</a>
            </div> */}
            Cours donné par professeur {content.professor} 
            
        </div>
        <div>
        {chapitress && chapitress.length > 0 && <SmallCardList items={chapitress} title="Chapitres" type="chapitre"></SmallCardList>}</div>
      </main>
    </SbEditable>
  )
}

export default Cours
