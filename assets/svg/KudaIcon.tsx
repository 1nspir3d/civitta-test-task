import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { useTheme } from "../../theme/ThemeProvider";
const KudaIcon = (props: SvgProps) => {
  const { theme, currentTheme } = useTheme();
  return (
    <Svg width={49} height={48} fill="none" {...props}>
      <Rect
        width={48}
        height={48}
        x={0.5}
        fill={currentTheme === "light" ? "#41276D" : "#FFFFFF"}
        rx={10}
      />
      <Path
        fill={currentTheme === "light" ? "#FFFFFF" : "#41276D"}
        d="m28.808 34-7.766-9.06 4.24 9.06h-2.939l-4.326-9.238L19.815 34H18.01l-1.8-9.251V34H15.5V14h.709v9.978L18.034 14h1.801l-1.833 10.02L22.412 14h2.908l-4.393 9.985L28.904 14h4.557l-8.25 10.33L33.5 34h-4.692Z"
      />
    </Svg>
  );
};
export default KudaIcon;
