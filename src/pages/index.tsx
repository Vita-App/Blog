import * as React from "react"
import type { HeadFC } from "gatsby"

// CSS imports
import '../styles/global.css';

// Component imports
import NavigationBar from "../components/NavigationBar";

const IndexPage = () => {
  return (
    <>
      <NavigationBar/>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home</title>
