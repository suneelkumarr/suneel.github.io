import React, {Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/workExperience";
import Projects from "./projects/projects";
import StartupProject from "./StartupProjects/StartupProjects";
import Achievement from "./achievement/achievement";
// import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/talks";
import Podcast from "./podcast/podcast";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";
import Profile from "./profile/profile";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}