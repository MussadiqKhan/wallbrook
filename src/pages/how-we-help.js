import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import rectangle from "../images/Rectangle.svg"
import Form from "../components/form"

const HowWeHelp = () => {
  const data = useStaticQuery(graphql`
    query HelpQuery {
      markdownRemark(fileAbsolutePath: { regex: "/help.md/" }) {
        frontmatter {
          title
          subtitle
          thumbnail
          helptitle1
          helplist1 {
            title
          }
          helptitle2
          helplist2 {
            title
          }
          helptitle3
          helplist3 {
            title
          }
          helptitle4
          helplist4 {
            title
          }
          helptitle5
          helplist5 {
            title
          }
          helptitle6
          helplist6 {
            title
          }
          help1
          helpdesc1
          help2
          helpdesc2
          help3
          helpdesc3
          help4
          helpdesc4
          contacttitle
          contactdesc
        }
      }
    }
  `)
  return (
    <div>
      <Header />
      <Hero
        heading={data.markdownRemark.frontmatter.title}
        subtitle={data.markdownRemark.frontmatter.subtitle}
        alt="help"
        imageName={data.markdownRemark.frontmatter.thumbnail.replace(
          "../src/images/",
          ""
        )}
      />

      <div className="container">
        <div className="parents">
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle1}</h3>
              <div style={{ width: "35px", marginTop: "10px" }}>
                <Image
                  alt="Investment Advisory"
                  name="Investment Advisory2.png"
                />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist1.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle2}</h3>
              <div style={{ width: "35px", marginTop: "15px" }}>
                <Image
                  alt="Retirement Planning"
                  name="Retirement Planning2.png"
                />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist2.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle3}</h3>
              <div style={{ width: "35px", marginTop: "10px" }}>
                <Image
                  alt="Wealth Accumulation"
                  name="Wealth Accumulation2.png"
                />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist3.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle4}</h3>
              <div style={{ width: "35px", marginTop: "15px" }}>
                <Image alt="Risk Management" name="Risk Management2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist4.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle5}</h3>
              <div style={{ width: "35px", marginTop: "8px" }}>
                <Image alt="Family Office" name="Family Office2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist5.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle6}</h3>
              <div style={{ width: "35px", marginTop: "10px" }}>
                <Image alt="Expatriates" name="Expatriates2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist6.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="main-financial-advice how-we-help">
        <div className="container">
          <div className="help-content">
            <div className="help-text">
              <h3>{data.markdownRemark.frontmatter.helpmain}</h3>
            </div>
            <div className="help-parent">
              <div className="help-child">
                <img src={rectangle} alt="first" />
                <h4>{data.markdownRemark.frontmatter.help1}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc1}</p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="second" />
                <h4>{data.markdownRemark.frontmatter.help2}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc2}</p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="Independence" />
                <h4>{data.markdownRemark.frontmatter.help3}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc3}</p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="coordination" />
                <h4>{data.markdownRemark.frontmatter.help4}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="container">
          <div className="main-form">
            <div className="form-text">
              <h2>{data.markdownRemark.frontmatter.contacttitle}</h2>
              <p>{data.markdownRemark.frontmatter.contactdesc}</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HowWeHelp
