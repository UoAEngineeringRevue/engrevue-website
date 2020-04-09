import React from "react"
import { Redirect } from "react-router"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SignUpPage = () => (
    <Layout>
        <SEO title="Sign Up" />
        <div>
            <p>This is a redirect page!</p>
            <Redirect to='/previous' />
        </div>
    </Layout>
    
)

export default SignUpPage