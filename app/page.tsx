import Image from "next/image";
import AudioPlayer from "./audio-player";

const gallery = [
  ...Array.from({ length: 28 }, (_, index) => {
    const photoNumber = index + 1;

    return {
      src: `/images/${photoNumber}.jpg`,
      alt: `Anh tot nghiep Nguyen Nhat Chi ${photoNumber}`,
    };
  }),
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden text-[#3c2530]">
      <AudioPlayer />

      <section className="relative grid min-h-[100svh] items-center px-4 pb-24 pt-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
        <div className="absolute inset-0 bg-white/28" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(480px,1.1fr)] lg:items-center lg:gap-10">
          <div className="max-w-2xl">
            <Image
              src="/images/letter.svg"
              alt="Mũ tốt nghiệp"
              width={640}
              height={360}
              priority
              unoptimized
              className="mx-auto mb-5 h-auto w-[36rem] max-w-full lg:w-[44rem]"
            />
            <h1 className="text-[clamp(2.85rem,14vw,5rem)] font-semibold leading-[1.02] text-[#7c2446] sm:text-7xl lg:text-8xl">
              Nguyễn
              <span className="block text-[#c94678]">Nhật Chi</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6f4b59] sm:mt-6 sm:text-xl sm:leading-8">
            Bốn năm thanh xuân rốt cuộc cũng đã đơm hoa kết trái! Trân trọng mời bạn đến chung vui trong ngày tốt nghiệp ngành Marketing cùng mình, để cùng lưu lại thật nhiều khoảnh khắc rực rỡ nhé!
            </p>

            <div className="mt-7 grid max-w-xl gap-3 min-[520px]:grid-cols-3 sm:mt-8">
              {[
                ["Ngày", "10.07.2026"],
                ["Thời gian", "07:00 - 13:30"],
                ["Địa điểm", "Hội trường A1 - Đại học Hà Nội"],
              ].map(([label, value]) => (
                <div
                  className="rounded-lg border border-white/80 bg-white/72 p-4 shadow-[0_18px_45px_rgba(197,70,120,0.12)] backdrop-blur"
                  key={label}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b45b78]">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#4a2835] sm:text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap sm:mt-8">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c94678] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(201,70,120,0.32)] transition hover:bg-[#ab2f5f] sm:px-6"
                href="#rsvp"
              >
                Xác nhận tham dự
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d87c9d] bg-white/70 px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#8e3558] transition hover:bg-white sm:px-6"
                href="#gallery"
              >
                Xem ảnh
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[980px] lg:-ml-8 lg:mr-0">
          <Image
            src="/images/back_2.svg"
            alt="Nguyen Nhat Chi trong bo anh tot nghiep"
            width={980}
            height={1225}
            priority
            unoptimized
            sizes="(min-width: 1024px) 58vw, 95vw"
            className="h-auto w-full scale-[1.28] lg:scale-[1.48]"
          />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="absolute inset-0 bg-white/44" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#d91f6a]">
              The Big Day
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#681436] sm:text-5xl">
              Một lời mời nhẹ nhàng cho ngày thật đặc biệt
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[
              ["Dress code", "Trang phục lịch sự, ưu tiên tông trắng, hồng, be hoặc pastel"],
              ["Lời nhắn", "Sự hiện diện của bạn là món quà ý nghĩa nhất với Chi trong ngày hôm nay"],
              ["Khoảnh khắc", "Hãy đến sớm một chút để cùng chụp ảnh và lưu lại thật nhiều kỷ niệm"],
              ["Chủ đề", "Pink Marketing Glam"],
            ].map(([title, copy]) => (
              <article
                className="rounded-lg border border-[#e76b9b]/65 bg-[#fff0f5]/90 p-5 shadow-[0_18px_45px_rgba(201,70,120,0.22)] backdrop-blur sm:p-6"
                key={title}
              >
                <h3 className="text-xl font-bold text-[#8f1f4d]">{title}</h3>
                <p className="mt-3 leading-7 text-[#6f334b]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-8 sm:py-20 lg:px-16"
        id="rsvp"
      >
        <div className="absolute inset-0 bg-white/62" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#63223c] sm:text-5xl">
              Hẹn gặp bạn tại lễ tốt nghiệp của Chi
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#765361] sm:text-lg sm:leading-8">
              Mình gửi bạn bản đồ trường cho dễ hình dung nha
            </p>
            <figure className="mx-auto mt-8 max-w-[720px] overflow-hidden rounded-lg shadow-[0_18px_45px_rgba(60,37,48,0.14)]">
              <Image
                src="/images/map.jpeg"
                alt="Bản đồ trường chỉ đường đến lễ tốt nghiệp"
                width={480}
                height={480}
                sizes="(min-width: 720px) 520px, 92vw"
                className="h-auto w-full"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-8 sm:py-20 lg:px-16"
        id="gallery"
      >
        <div className="absolute inset-0 bg-white/38" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c94678]">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#63223c] sm:text-4xl">
                Pink memories
              </h2>
            </div>
          </div>

          <div className="grid auto-rows-[220px] gap-4 min-[520px]:grid-cols-2 sm:auto-rows-[260px] lg:grid-cols-3">
            {gallery.map((item, index) => (
              <figure
                className={`relative overflow-hidden rounded-lg bg-white/70 shadow-[0_18px_45px_rgba(60,37,48,0.1)] sm:rounded-xl ${
                  index % 7 === 0 || index % 7 === 3
                    ? "min-[520px]:row-span-2"
                    : ""
                }`}
                key={item.src}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
