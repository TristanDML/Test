import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Company.module.scss"

const Company= ({ data }) => {
  var content = data.story.content;
  var countries = data.rels.filter(obj => {
    return content.country.includes(obj.uuid);
  });
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.studio}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          </div>
        <div className={styles.logo}>
          <img src={content.logo.filename} />
        </div>
        <div className={styles.description}>
          {render(content.description)}
        </div>
        <div className={styles.country}>
            {countries.map((item, index) => (
              <div className={styles.country}>
                <img src={item.content.flag.filename}></img>
              </div>
            ))}</div>
          
      </main>
    </SbEditable>
  )
}

export default Company
