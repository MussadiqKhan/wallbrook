import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "./image"
import "../styles/footer.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(fileAbsolutePath: { regex: "/footer.md/" }) {
        frontmatter {
          office
          officestreet
          officecity
          postalgpo
          postalcity
          email
          number
          footerdesc1
          footerdesc2
          footerdesc3
          footerdesc4
        }
      }
    }
  `)
  return (
    <div>
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="footer ">
              <div className="image">
                <div className="image-footer">
                  <Image alt="logo footer" name="logo-footer.png" />
                </div>
              </div>
              <div className="pages">
                <ul>
                  <li>About us</li>
                  <li>how we help</li>
                  <li>Framework</li>
                  <li>Wholesale Clients</li>
                  <li>Insight</li>
                </ul>
              </div>
              <div className="address">
                <h5>Office Address</h5>
                <p>{data.markdownRemark.frontmatter.office}</p>{" "}
                <p>{data.markdownRemark.frontmatter.officestreet}</p>
                <p>{data.markdownRemark.frontmatter.officecity}</p>
              </div>
              <div className="address">
                <h5>Postal Address</h5>
                <p>{data.markdownRemark.frontmatter.postalgpo}</p>
                <p>{data.markdownRemark.frontmatter.postalcity}</p>
              </div>
              <div className="contact">
                <h5>Contact</h5>
                <p>{data.markdownRemark.frontmatter.email}</p>
                <p>{data.markdownRemark.frontmatter.number}</p>
              </div>
            </div>
            <div className="terms">
              <div className="copyright">
                <p>©2020 Walbrook Wealth Managemen. All rights reserved.</p>
              </div>
              <div className="policy-link">
                <p style={{ paddingRight: "12px" }}>Privacy</p>
                <p>Financial Services Guide (FSG)</p>
              </div>
              <div className="cdc-policy">
                <p>Continuing Professional Development (CPD) Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="policies">
            <div className="text">
              <p style={{ maxWidth: "340px" }}>
                {data.markdownRemark.frontmatter.footerdesc1}
              </p>
            </div>
            <div className="trademark">
              <div className="trademark-1">
                <Image
                  className="IMAGE"
                  alt="trademark chartered"
                  name="trademark-1.png"
                />
              </div>

              <div className="trademark-2">
                <Image alt="trademark tax" name="trademark-2.png" />
              </div>
            </div>
            <div className="text">
              <p>{data.markdownRemark.frontmatter.footerdesc2}</p>
            </div>
          </div>
          <div className="liability">
            <p>{data.markdownRemark.frontmatter.footerdesc3}</p>
            <p>{data.markdownRemark.frontmatter.footerdesc4}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
