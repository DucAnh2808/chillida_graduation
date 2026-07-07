import Image from "next/image";
import AudioPlayer from "./audio-player";

const gallery = [
  { src: "/images/IMG_0160.JPG", alt: "Anh tot nghiep Nguyen Nhat Chi" },
  { src: "/images/IMG_0159.JPG", alt: "Khoanh khac tot nghiep Nguyen Nhat Chi" },
  { src: "/images/IMG_0158.JPG", alt: "Nguyen Nhat Chi trong le phuc tot nghiep" },
  { src: "/images/IMG_0157.JPG", alt: "Anh ky niem tot nghiep cua Nguyen Nhat Chi" },
  { src: "/images/IMG_0156.JPG", alt: "Bo anh tot nghiep nganh Marketing" },
  { src: "/images/IMG_0155.JPG", alt: "Nguyen Nhat Chi mung ngay tot nghiep" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden text-[#3c2530]">
      <AudioPlayer />

      <section className="relative grid min-h-[100svh] items-center px-4 pb-24 pt-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
        <div className="absolute inset-0 bg-white/28" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex max-w-full rounded-full border border-[#e6a3b8] bg-white/75 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9b4664] shadow-sm sm:px-4 sm:text-sm sm:tracking-[0.18em]">
              Graduation Invitation
            </p>
            <h1 className="text-[clamp(2.85rem,14vw,5rem)] font-semibold leading-[1.02] text-[#7c2446] sm:text-7xl lg:text-8xl">
              Nguyen
              <span className="block text-[#c94678]">Nhat Chi</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6f4b59] sm:mt-6 sm:text-xl sm:leading-8">
              Tran trong kinh moi ban den chung vui trong ngay tot nghiep dai
              hoc nganh Marketing, danh dau mot hanh trinh ruc ro va mot chuong
              moi day cam hung.
            </p>

            <div className="mt-7 grid max-w-xl gap-3 min-[520px]:grid-cols-3 sm:mt-8">
              {[
                ["Ngay", "28.06.2026"],
                ["Thoi gian", "09:00 AM"],
                ["Dia diem", "Hoi truong dai hoc"],
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
                Xac nhan tham du
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d87c9d] bg-white/70 px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#8e3558] transition hover:bg-white sm:px-6"
                href="#gallery"
              >
                Xem anh
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="relative aspect-[3/5] max-h-[68svh] min-h-[360px] overflow-hidden rounded-[20px] bg-white sm:rounded-[28px]">
              <Image
                src="/images/certificate.png"
                alt="Nguyen Nhat Chi trong bo anh tot nghiep"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4f1d34]/78 to-transparent p-5 pt-20 text-white sm:p-6 sm:pt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.18em]">
                  Marketing Graduate
                </p>
                <p className="mt-2 text-xl font-semibold sm:text-2xl">Class of 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="absolute inset-0 bg-white/62" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c94678]">
              The Big Day
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#63223c] sm:text-5xl">
              Một lời mời nhẹ nhàng cho ngày thật đặc biệt
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[
              ["Dress code", "Trang phuc lich su, uu tien tong trang, hong, be hoac pastel."],
              ["Loi nhan", "Su hien dien cua ban la mon qua y nghia nhat voi Chi trong ngay nay."],
              ["Khoanh khac", "Hay den som mot chut de cung chup anh va luu lai that nhieu ky niem."],
              ["Chu de", "Pink Marketing Glam voi cam hung tu mot chien dich thanh cong ruc ro."],
            ].map(([title, copy]) => (
              <article
                className="rounded-lg border border-white/75 bg-white/108 p-5 backdrop-blur sm:p-6"
                key={title}
              >
                <h3 className="text-xl font-semibold text-[#7c2446]">{title}</h3>
                <p className="mt-3 leading-7 text-[#765361]">{copy}</p>
              </article>
            ))}
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
                  index === 0 || index === 3 ? "min-[520px]:row-span-2" : ""
                }`}
                key={item.alt}
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
          </div>
        </div>
      </section>
    </main>
  );
}
