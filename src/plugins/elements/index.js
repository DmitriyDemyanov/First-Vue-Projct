import Vue from "vue";
import lang from 'element-ui/lib/locale/lang/en';
import locale  from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
  Button,
  Card,
  Form,
  FormItem,
  Select,
  Option,
  Alert,
  Input,
  Icon
} from 'element-ui';

const elements = [
  Button,
  Card,
  Form,
  FormItem,
  Select,
  Option,
  Alert,
  Input,
  Icon
];

locale.use(lang);

elements.forEach(El => Vue.use(El, { locale }));