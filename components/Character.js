import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Character.module.scss"
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


const Character = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    // var directors = data.rels.filter(obj => {
    //   return content.directors.includes(obj.uuid);
    // });
    // var stars = data.rels.filter(obj => {
    //   return content.stars.includes(obj.uuid);
    // });
    // var writers = data.rels.filter(obj => {
    //   return content.writers.includes(obj.uuid);
    // })
    // var studios = data.rels.filter(obj => {
    //   return content.studios.includes(obj.uuid);
    // })
    var links = data.rels.filter(obj => {
      return content.links.includes(obj.uuid);
    })
    var pictures = content.mainpicture;
  } else {
    var content = data;
  }


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
        <div className={styles.character}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.Summary}>
            {render(content.Summary)}
          </div>
          <div className={styles.age}>
          Age of the character: {render(content.age)} 
          </div>
          <div className={styles.playable}> Is it playable? {render(content.playable)}
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.imagegallery} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          {/* <div className={styles.links}>
              <a href={""}>VISIT</a>
            </div> */}
        </div>
      </main>
    </SbEditable>
  )
}

export default Character
