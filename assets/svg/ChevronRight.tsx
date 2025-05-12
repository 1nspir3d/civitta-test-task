import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { useTheme } from "../../theme/ThemeProvider";
const ChevronRightIcon = (props: SvgProps) => {
  const { theme } = useTheme();
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Rect width={20} height={20} fill={theme.button.disabled} rx={10} />
      <Path
        fill={theme.button.disabledButtonContents}
        fillRule="evenodd"
        stroke={theme.button.disabledButtonContents}
        strokeWidth={0.5}
        d="M11.626 10 8.56 6.88a.469.469 0 1 1 .668-.658L12.941 10l-3.714 3.777a.469.469 0 1 1-.668-.657L11.626 10Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default ChevronRightIcon;
