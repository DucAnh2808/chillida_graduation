import { readdirSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { The_Nautigal } from "next/font/google";
import AudioPlayer from "./audio-player";

const theNautigal = The_Nautigal({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: "700",
});

const gallery = readdirSync(join(process.cwd(), "public/images"))
  .filter((fileName) => /^\d+\.(jpe?g|png)$/i.test(fileName))
  .sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10))
  .map((fileName) => {
    const photoNumber = fileName.replace(/\.(jpe?g|png)$/i, "");

    return {
      src: `/images/${fileName}`,
      alt: `Anh tot nghiep Nguyen Nhat Chi ${photoNumber}`,
    };
  });

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
            <h1 className={`${theNautigal.className} text-[clamp(3.8rem,18vw,6.8rem)] font-bold leading-[0.86] text-[#7c2446] sm:text-8xl lg:text-9xl`}>
              Nguyễn
              <span className="block text-[#c94678]">Nhật Chi</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6f4b59] sm:mt-6 sm:text-xl sm:leading-8">
            Bốn năm thanh xuân rốt cuộc cũng đã đơm hoa kết trái! Trân trọng mời bạn đến chung vui trong ngày tốt nghiệp ngành Marketing cùng mình, để cùng lưu lại thật nhiều khoảnh khắc rực rỡ nhé!
            </p>

            <div className="mt-7 grid max-w-xl gap-3 min-[520px]:grid-cols-3 sm:mt-8">
              {[
                ["Ngày", "10.07.2026"],
                ["Thời gian", "9:00 - 13:30"],
                ["Địa điểm", "Trường Đại học Hà Nội"],
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

          <div className="relative mx-auto w-full max-w-[1680px] lg:-ml-20 lg:mr-0">
          <Image
            src="/images/back_2.svg"
            alt="Nguyen Nhat Chi trong bo anh tot nghiep"
            width={1680}
            height={2100}
            priority
            unoptimized
            sizes="(min-width: 1024px) 58vw, 95vw"
            className="h-auto w-full scale-[2.28] lg:scale-[2.48]"
          />
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[url('/images/ornate-reference-background.png')] bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-8 sm:py-20 lg:px-16"
        id="rsvp"
      >
        <div className="absolute inset-0 bg-white/62" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#63223c] sm:text-5xl">
              Nhìn vào ảnh sau và trả lời câu hỏi:
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#765361] sm:text-lg sm:leading-8">
              Đây có phải công cụ giúp bạn tiết kiệm thời gian tìm kiếm Chi tại trường không? 😍😍
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
        className="relative overflow-hidden bg-[url('/images/ornate-reference-background.png')] bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-8 sm:py-20 lg:px-16"
        id="gallery"
      >
        <div className="absolute inset-0 bg-white/38" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c94678]">
                Tiếp, không liên quan lắm nhưng mà
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#63223c] sm:text-4xl">
                Ngắm hộ mình mấy bức này bạn nhé!
              </h2>
            </div>
          </div>

          <div className="grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/80 bg-[#fffaf4]/90 shadow-[0_18px_45px_rgba(60,37,48,0.1)] sm:rounded-xl"
                key={item.src}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
                  className="object-contain p-2 transition duration-500 hover:scale-[1.02]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[url('/images/ornate-reference-background.png')] bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="absolute inset-0 bg-white/44" />
        <div className="relative z-10 mx-auto max-w-5xl py-10 text-center sm:py-16">
          <h2 className="text-3xl font-bold leading-tight text-[#681436] sm:text-5xl">
            Sau ngày lễ t sẽ ném hết mấy ảnh xinh của chúng mình vào đây nhie &lt;33
          </h2>
        </div>
      </section>

      <section className="px-4 py-12 text-center sm:px-8 sm:py-16 lg:px-16">
        <p className="mx-auto max-w-3xl whitespace-pre-line text-2xl font-semibold leading-relaxed text-[#7c2446] sm:text-3xl">
          1 2 3 chú chim ri{"\n"}
          Cảm ơn đã đến lễ tốt nghiệp của Chi
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl items-end justify-center gap-6 sm:grid-cols-2 sm:gap-8">
          <Image
            src="/images/graduation-puppy.png"
            alt="Chú cún đội mũ tốt nghiệp cầm bằng"
            width={720}
            height={960}
            sizes="(min-width: 768px) 360px, 78vw"
            className="mx-auto h-auto w-full max-w-[360px]"
          />
          <Image
            src="/images/pink-dress-puppy.png"
            alt="Chú cún mặc váy hồng đeo bờm ngôi sao"
            width={720}
            height={960}
            sizes="(min-width: 768px) 360px, 78vw"
            className="mx-auto h-auto w-full max-w-[360px]"
          />
        </div>
      </section>
    </main>
  );
}
