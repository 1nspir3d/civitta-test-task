import Svg, { G, Rect, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
import { useTheme } from "../../theme/ThemeProvider";
type TProps = {
  checked: boolean;
} & SvgProps;
const SvgComponent = ({ checked, ...rest }: TProps) => {
  const { theme } = useTheme();
  return (
    <Svg width={24} height={24} fill="none" {...rest}>
      <G clipPath="url(#a)">
        <Rect
          width={16}
          height={16}
          x={4}
          y={4}
          fill={checked ? theme.button.primary : theme.background.secondary}
          rx={4}
        />
        <Rect
          width={15}
          height={15}
          x={4.5}
          y={4.5}
          stroke={theme.button.primary}
          strokeOpacity={0.1}
          rx={3.5}
        />
        <Path
          fill={
            checked
              ? theme.button.primaryButtonContents
              : theme.background.secondary
          }
          d="M15.765 9.205a.75.75 0 0 1 .03 1.06l-4.26 4.5a.754.754 0 0 1-1.078.015l-2.255-2.25a.75.75 0 0 1 .537-1.261.753.753 0 0 1 .525.201l1.71 1.704 3.728-3.94a.752.752 0 0 1 1.063-.03Z"
        />
      </G>
    </Svg>
  );
};
export default SvgComponent;
