/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
import DrawerInitiator from './utils/drawer-initiator';
import UrlParser from './routes/url-parser';
import routes from './routes/routes';

class App {
    constructor({
 drawer, content, header, checkbox, topnav, menulist, nextpage, nextpage2, intro, aboutme, projects,
}) {
      this._checkbox = checkbox;
      // this._label = label;
      this._topnav = topnav;
      this._drawer = drawer;
      this._content = content;
      this._header = header;
      this._menulist = menulist;
      this._nextpage = nextpage;
      this._nextpage2 = nextpage2;
      this._intro = intro;
      this._aboutme = aboutme;
      this._projects = projects;
      this._initialAppShell();
    }
  
    _initialAppShell() {
      DrawerInitiator.init({
        checkbox: this._checkbox,
        // label: this._label,
        topnav: this._topnav,
        drawer: this._drawer,
        content: this._content,
        header: this._header,
        menulist: this._menulist,
        nextpage: this._nextpage,
        nextpage2: this._nextpage2,
        intro: this._intro,
        aboutme: this._aboutme,
        projects: this._projects,
      });
    }
  
    async renderPage() {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
  
  export default App;