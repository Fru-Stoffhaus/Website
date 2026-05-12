import Image from "next/image";

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
  return <BrandIcon src="/images/icon-fabric.png" alt="" {...props} />;
}

export function PinsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-pins.png" alt="" {...props} />;
}

export function ButtonsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-buttons.png" alt="" {...props} />;
}

export function RulerIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-ruler.png" alt="" {...props} />;
}

export function PincushionIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-pincushion.png" alt="" {...props} />;
}

export function NeedlesIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-needles.png" alt="" {...props} />;
}

export function SnipsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-snips.png" alt="" {...props} />;
}

export function MeasuringTapeIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-measuring-tape.png" alt="" {...props} />;
}

export function NeedleThreadIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-needle-thread.png" alt="" {...props} />;
}

export function SafetyPinsIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-safety-pins.png" alt="" {...props} />;
}

export function SewingMachineIcon(props: BrandIconProps) {
  return <BrandIcon src="/images/icon-sewing-machine.png" alt="" {...props} />;
}
