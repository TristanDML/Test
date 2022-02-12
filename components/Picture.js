import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Picture.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import { resolveHref } from "next/dist/next-server/lib/router/router"
import DynamicComponent from './DynamicComponent'

const Picture = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {

    locale = data.story.lang;
    var content = data.story.content;
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
         
        <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.picture.filename}")` }}></div>
      </main>
    </SbEditable>
  )
}

export default Picture
