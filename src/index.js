import Menu from './components/menu';
import Card from './components/card';
import Loading from './components/loading';
import {Select, Option, OptionGroup} from './components/select';
import {Checkbox, CheckboxGroup} from './components/checkbox';
import {Radio, RadioGroup} from './components/radio';
import Button from './components/button';
import Modal from './components/modal';
import Message from './components/message';

const izy = {
  Menu: Menu.Menu,
  izyMenu: Menu.Menu,
  MenuGroup: Menu.MenuGroup,
  MenuItem: Menu.MenuItem,
  Submenu: Menu.Submenu,
  Card,
  Loading,
  Option: Option,
  izyOption: Option,
  OptionGroup,
  Select,
  izySelect: Select,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Modal,
  Button,
  Message
}

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  Object.keys(izy).forEach(key => {
    Vue.component(key, izy[key]);
  });
  Vue.use(Loading.directive);

  Vue.prototype.$Message = Message;
  Vue.prototype.$Modal = Modal;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(izy, {Loading, install}); // eslint-disable-line no-undef
