import color, {Color} from './color';
import font, {Font} from './font';
import style from './style';
import unit, {Unit} from './unit';
import validation from './validations';
import rules from './rules';
import {strings} from '../localization';

const R = {
  color: color,
  font,
  style,
  unit,
  validation,
  strings,
  rules,
};

export type {Color, Font, Unit};

export default R;
