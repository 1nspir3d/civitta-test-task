import Svg, { SvgProps, Path } from "react-native-svg";
import { useTheme } from "../../theme/ThemeProvider";
const ChevronLeft = (props: SvgProps) => {
  const { theme } = useTheme();
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        fill={theme.button.secondaryButtonContents}
        fillRule="evenodd"
        d="m7.845 10 5.488 5.488a.833.833 0 1 1-1.178 1.179L5.488 10l6.667-6.667a.833.833 0 1 1 1.178 1.179L7.845 10Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default ChevronLeft;
