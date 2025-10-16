const CloverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block size-8 text-primary"
    aria-label="Clover icon"
    role="img"
  >
    <path d="M16.2 3.8a2.7 2.7 0 0 0-3.8 0l-.4.3-.4-.4a2.7 2.7 0 0 0-3.8 0l-.4.3-.4-.4a2.7 2.7 0 0 0-3.8 0l-3 3.1a2.7 2.7 0 0 0 0 3.8l.3.4-.3.4a2.7 2.7 0 0 0 0 3.8l.3.4-.3.4a2.7 2.7 0 0 0 0 3.8l3.1 3.1a2.7 2.7 0 0 0 3.8 0l.4-.3.4.4a2.7 2.7 0 0 0 3.8 0l.4-.3.4.4a2.7 2.7 0 0 0 3.8 0l.4-.3.4.4a2.7 2.7 0 0 0 3.8 0l3.1-3.1a2.7 2.7 0 0 0 0-3.8l-.3-.4.3-.4a2.7 2.7 0 0 0 0-3.8l-.3-.4.3-.4a2.7 2.7 0 0 0 0-3.8z" />
    <path d="M12 12 7.8 7.8" />
    <path d="m12 12 4.2-4.2" />
    <path d="M12 12 7.8 16.2" />
    <path d="M12 12l4.2 4.2" />
  </svg>
);


export function PrivateNote() {
  return (
    <section id="private-note" className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <CloverIcon />
        <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Lời nhắn riêng</h2>
        <p className="mt-6 text-lg text-foreground/80">
          Hạnh tin rằng khoảng thời gian 5:00 sáng là lúc chúng ta minh mẫn và tập trung nhất, là "giờ vàng" để kết nối sâu với chính mình. Một buổi hẹn vào lúc này có thể mang lại những đột phá bất ngờ.
        </p>
        <p className="mt-4 text-lg text-foreground/80">
          Mọi chia sẻ của bạn trong các phiên coach đều được cam kết bảo mật tuyệt đối. Đây là không gian an toàn để bạn là chính mình và khám phá.
        </p>
      </div>
    </section>
  );
}
