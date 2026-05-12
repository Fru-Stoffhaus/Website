type BrandIconProps = {
  className?: string;
  dark?: boolean;
};

function BrandIcon({
  src,
  className = "",
  dark = false,
}: BrandIconProps & { src: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt=""
      className={`${dark ? "invert" : ""} ${className}`}
      aria-hidden="true"
    />
  );
}

export function FabricIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-fabric.png" {...props} />;
}

export function PinsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-pins.png" {...props} />;
}

export function ButtonsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-buttons.png" {...props} />;
}

export function RulerIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-ruler.png" {...props} />;
}

export function PincushionIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-pincushion.png" {...props} />;
}

export function NeedlesIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-needles.png" {...props} />;
}

export function SnipsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-snips.png" {...props} />;
}

export function MeasuringTapeIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-measuring-tape.png" {...props} />;
}

export function NeedleThreadIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-needle-thread.png" {...props} />;
}

export function SafetyPinsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-safety-pins.png" {...props} />;
}

export function SewingMachineIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-sewing-machine.png" {...props} />;
}
