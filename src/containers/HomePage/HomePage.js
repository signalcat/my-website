import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './HomePage.module.css';
import logo from '../../assets/images/he1.svg';
import crane from '../../assets/images/cranewhite.svg';

export class HomePage extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.Homepage}>
                    <div className={classes.Panel + " " + classes.LeftPannel}>
                        <div className={classes.LeftText}>
                            <h2>张鹤</h2>
                            <p>关注设计的</p>
                            <h3>前端工程师</h3>
                        </div>
                        <ul className={classes.LeftList}>
                            <li className={classes.ListItem}><a href="/Resume">简历</a></li>
                            <li className={classes.ListItem}><a>代码</a></li>
                            <li className={classes.ListItem}><a>博客</a></li>
                            <li className={classes.ListItem}><a>邮件</a></li>
                        </ul>
                        <img src={logo} className={classes.logo}></img>
                        <img src={crane} className={classes.crane}></img>
                    </div>
                    <div className={classes.Panel + " " + classes.RightPannel}>
                        <div className={classes.RightText}>
                            <h2>Rebecca Zhang</h2>
                            <p>A Design Oriented</p>
                            <h3>Front-End Engineer</h3>
                        </div>
                        <ul className={classes.RightList}>
                            <li className={classes.ListItem}><a>Resume</a></li>
                            <li className={classes.ListItem}><a>Github</a></li>
                            <li className={classes.ListItem}><a>Blog</a></li>
                            <li className={classes.ListItem}><a>Email</a></li>
                        </ul>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default HomePage;