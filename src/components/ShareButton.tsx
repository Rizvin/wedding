import { Share2 } from "lucide-react";

export default function ShareButton() {
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: "Wedding Invitation",
        text: "You are invited to our wedding!",
        url,
      });
      return;
    }
    await navigator.clipboard.writeText(url);
    alert("Invitation link copied!");
  };

  return (
    <button
      onClick={share}
      aria-label="Share invitation"
      className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#294637] text-white shadow-xl"
    >
      <Share2 size={18} />
    </button>
  );
}
