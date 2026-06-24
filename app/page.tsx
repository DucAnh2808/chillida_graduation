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
    <main className="min-h-screen overflow-hidden bg-[#fff7fa] text-[#3c2530]">
      <AudioPlayer />

      <section className="relative grid min-h-screen items-center px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,188,211,0.42),transparent_28%),linear-gradient(135deg,#fff7fa_0%,#ffe4ee_48%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl pt-16 lg:pt-0">
            <p className="mb-5 inline-flex rounded-full border border-[#e6a3b8] bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#9b4664] shadow-sm">
              Graduation Invitation
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] text-[#7c2446] sm:text-7xl lg:text-8xl">
              Nguyen
              <span className="block text-[#c94678]">Nhat Chi</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f4b59] sm:text-xl">
              Tran trong kinh moi ban den chung vui trong ngay tot nghiep dai
              hoc nganh Marketing, danh dau mot hanh trinh ruc ro va mot chuong
              moi day cam hung.
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
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
                  <p className="mt-2 text-lg font-semibold text-[#4a2835]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[#c94678] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(201,70,120,0.32)] transition hover:bg-[#ab2f5f]"
                href="#rsvp"
              >
                Xac nhan tham du
              </a>
              <a
                className="rounded-full border border-[#d87c9d] bg-white/70 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#8e3558] transition hover:bg-white"
                href="#gallery"
              >
                Xem anh
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-4 top-10 h-32 w-32 rounded-full border border-[#e5a3b8]" />
            <div className="absolute -right-3 bottom-12 h-44 w-44 rounded-full bg-[#ffd3e0]/65 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border-[10px] border-white bg-white shadow-[0_35px_90px_rgba(126,36,70,0.24)]">
              <Image
                src="/images/IMG_0160.JPG"
                alt="Nguyen Nhat Chi trong bo anh tot nghiep"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4f1d34]/78 to-transparent p-6 pt-24 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Marketing Graduate
                </p>
                <p className="mt-2 text-2xl font-semibold">Class of 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c94678]">
              The Big Day
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#63223c] sm:text-5xl">
              Mot loi moi nhe nhang cho ngay that dac biet.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Dress code", "Trang phuc lich su, uu tien tong trang, hong, be hoac pastel."],
              ["Loi nhan", "Su hien dien cua ban la mon qua y nghia nhat voi Chi trong ngay nay."],
              ["Khoanh khac", "Hay den som mot chut de cung chup anh va luu lai that nhieu ky niem."],
              ["Chu de", "Pink Marketing Glam voi cam hung tu mot chien dich thanh cong ruc ro."],
            ].map(([title, copy]) => (
              <article
                className="rounded-lg border border-[#f4d3de] bg-[#fff7fa] p-6"
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
        className="bg-[#fff7fa] px-5 py-20 sm:px-8 lg:px-16"
        id="gallery"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c94678]">
                Gallery
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-[#63223c]">
                Pink memories
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#765361]">
              Anh duoc lay tu bo anh trong thu muc <span className="font-semibold">images</span>
              va duoc dua vao public de Next.js phuc vu tren web.
            </p>
          </div>

          <div className="grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <figure
                className={`relative overflow-hidden rounded-xl bg-[#f8dce6] shadow-[0_18px_45px_rgba(126,36,70,0.12)] ${
                  index === 0 || index === 3 ? "sm:row-span-2" : ""
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

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-16" id="rsvp">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c94678]">
              RSVP
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#63223c] sm:text-5xl">
              Hen gap ban tai le tot nghiep cua Chi.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#765361]">
              De Chi chuan bi chu dao hon, ban co the de lai thong tin tham du
              va mot loi chuc nho tai day.
            </p>
          </div>

          <form className="rounded-2xl border border-[#f1cad7] bg-[#fff7fa] p-6 shadow-[0_25px_70px_rgba(126,36,70,0.12)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[#7c2446]">
                  Ten cua ban
                </span>
                <input
                  className="mt-2 h-12 w-full rounded-lg border border-[#edc2d2] bg-white px-4 text-[#3c2530] outline-none transition focus:border-[#c94678] focus:ring-4 focus:ring-[#ffd8e5]"
                  placeholder="Vi du: Minh Anh"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#7c2446]">
                  So khach
                </span>
                <input
                  className="mt-2 h-12 w-full rounded-lg border border-[#edc2d2] bg-white px-4 text-[#3c2530] outline-none transition focus:border-[#c94678] focus:ring-4 focus:ring-[#ffd8e5]"
                  min="1"
                  placeholder="1"
                  type="number"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-[#7c2446]">
                Ban co tham du khong?
              </span>
              <select className="mt-2 h-12 w-full rounded-lg border border-[#edc2d2] bg-white px-4 text-[#3c2530] outline-none transition focus:border-[#c94678] focus:ring-4 focus:ring-[#ffd8e5]">
                <option>Co, minh se den chung vui</option>
                <option>Minh se bao lai sau</option>
                <option>Tiec qua, minh khong tham du duoc</option>
              </select>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-[#7c2446]">
                Loi chuc cho Chi
              </span>
              <textarea
                className="mt-2 min-h-32 w-full resize-none rounded-lg border border-[#edc2d2] bg-white px-4 py-3 text-[#3c2530] outline-none transition focus:border-[#c94678] focus:ring-4 focus:ring-[#ffd8e5]"
                placeholder="Viet loi chuc cua ban..."
              />
            </label>

            <button
              className="mt-6 h-12 w-full rounded-full bg-[#c94678] px-6 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(201,70,120,0.26)] transition hover:bg-[#ab2f5f]"
              type="button"
            >
              Gui loi xac nhan
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
