import React from "react"
import classNames from "classnames"
import styles from "./index.less"

const GlobalFooter = ({ className, links, copyright }) => {
  console.log('links------->>>', links)
  const clsString = classNames(styles.globalFooter, className)
  return <footer className={clsString}>
    {copyright}
  </footer>
}

export default GlobalFooter
