import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Chapitre.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import { resolveHref } from "next/dist/next-server/lib/router/router"
import DynamicComponent from './DynamicComponent'
const resolveCharacters = {
  en: 'Characters',
  nl: 'Personages',
  fr: 'Personnages'
}
const resolveEnnemies = {
  en: 'Friends, family and ennemies',
  nl: 'Vrienden, gezin en vijanden',
  fr: 'Amis, famille et ennemis',
}
const resolveGames = {
  en: 'Games',
  nl: 'Spellen',
  fr: 'Jeux',
}
const resolveAge = {
  en: 'Age of the character:',
  nl: 'Leeftijd van het personage:',
  fr: 'Âge du personnage:',
}
const Chapitre = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {

    locale = data.story.lang;
    var content = data.story.content;
if (content.movies){
    var courses=data.rels.filter(obj => {
    return content.movies.includes(obj.uuid);
    })
  } else {
    var content = data;
  }

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
          <h1 className={styles.title}>
            {content.title}
          </h1>
         
        <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
        {content.body ? content.body.map((content) =>
          <DynamicComponent data={content} key={content._uid}  />
        ) : null}
                <div className={styles.cours}>
                {courses && courses.length > 0 && <SmallCardList items={courses}  type='cours'></SmallCardList>}
                  </div>
      </main>
    </SbEditable>
  )
}
}
export default Chapitre
