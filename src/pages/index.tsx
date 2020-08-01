import React from "react"
const profile = require("../images/profile.jpg")
import "./index.css"

export default function IndexPage() {
  return (
    <div className="index-page root">
      <div className="container">
        <h1>Hello, I'm Fumiaki Yoshimatsu.</h1>
        <div className="content">
          <div className="avatar">
          <img src={profile} />
          </div>
          <ul className="links">
            <li><a href="https://github.com/fumiakiy">GitHub</a></li>
            <li><a href="https://twitter.com/fumiakiy">Twitter</a></li>
            <li><a href="https://fumiakiy.tumblr.com">tumblr</a></li>
            <li><a href="https://medium.com/@fumiakiy">Medium</a></li>
            <li><a href="https://linkedin.com/in/fumiakiy">LinkedIn</a></li>
            <li><a href="resume/index.html">Resume</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
