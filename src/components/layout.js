/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"

import Navbar from './global/navbar.jsx';
import Footer from "./global/footer";


const Layout = ({ children }) => (
  <>
    <Navbar />
    { children }
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
