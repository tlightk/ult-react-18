import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  size: string;
  color: string;
  onClick: () => void;
}

export default function LikeButton({ size, color = "black", onClick }: Props) {
  return <AiOutlineHeart size={size} color={color} onClick={onClick} />;
}
