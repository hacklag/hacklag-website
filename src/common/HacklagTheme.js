import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from './Spacing';

export default {
  spacing: Spacing,
  contentFontFamily: 'Raleway, sans-serif',
  palette: {
    primary1Color: '#EC018C',
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,

    accent1Color: '#EC018C',
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,

    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500
  }
};
