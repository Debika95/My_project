import React from 'react'
import { Route,Switch,BrowserRouter as Rauter } from 'react-router-dom'
import { Header } from '../Layout/Header/header'
import {Home} from '../Component/Home/home'
import { Different_categories } from '../Categories/Different_Categories/different_categories'
import { Sub_categories } from '../Categories/Sub_Categories/sub_categories'
import { Details } from '../Categories/Details/details'
import { Contact } from '../Component/Contact/contact'
import { AboutUs } from '../Component/About/aboutUs'
import RegForm from '../RegistrationComponent/regForm'
import { LoginForm } from '../Authentication/loginForm'
import { Protected } from './protected'
import { Footer } from '../Footer/footer'
import { Shope } from '../Categories/Details/shope'
export const Routes = () => {
    return (
        <Rauter>
            <Header></Header>
            <Switch>
              <Route path = "/home page" component={Home}></Route>
              <Route path = "/contact" component={Contact}></Route>
              <Route path = "/about" component={AboutUs}></Route>
              <Route path = "/diffCat/:name" component={Different_categories}></Route>
              <Route path = "/subcat/:name" component={Sub_categories}></Route>
              <Route path = "/details/:name/:id" component={Details}></Route>
              <Route path = "/signUp" component={RegForm}></Route>
              <Route path = "/sign" component={LoginForm}></Route>
              <Route path = "/foot" component={Footer}></Route>
              <Route path = "/shope" component={Shope}></Route>
            </Switch>
        </Rauter>
    )
}
