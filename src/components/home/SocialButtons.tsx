import Image from "next/image";
import { useTranslations } from "next-intl";
import { STORE_INFO } from "@/lib/constants";
import { NeedlesIcon, PinsIcon } from "@/components/ui/CraftIcons";
import { ZigzagLine, DottedLine } from "@/components/ui/DecorativePatterns";

const WHATSAPP_GREEN = "#25D366";

export default function SocialButtons() {
  const t = useTranslations("Social");

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <DottedLine className="absolute top-0 left-[10%] w-[80%] h-2 text-fru-purple/20" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[6%] w-24 h-24 rotate-[20deg] opacity-20 hidden sm:block">
          <NeedlesIcon dark />
        </div>
        <div className="absolute bottom-10 right-[6%] w-20 h-20 rotate-[-15deg] opacity-20 hidden sm:block">
          <PinsIcon dark />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark mb-8">
          {t("title")}
        </h2>

        {/* The channel is aimed at customers who use neither Instagram nor
            Facebook, so it leads — the two platform buttons follow below. */}
        <div
          id="whatsapp"
          className="rounded-2xl border border-[#25D366]/30 bg-white shadow-sm p-6 sm:p-8 text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
            <div className="flex-1">
              <h3 className="flex items-center gap-3 font-heading text-xl sm:text-2xl font-bold text-fru-dark mb-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                {t("whatsappTitle")}
              </h3>

              <p className="text-fru-dark/80 leading-relaxed">
                {t("whatsappIntro")}
              </p>
              <p className="mt-3 text-fru-dark/80 leading-relaxed">
                {t("whatsappHow")}
              </p>

              <ul className="mt-4 space-y-1.5">
                {[
                  t("whatsappItem1"),
                  t("whatsappItem2"),
                  t("whatsappItem3"),
                  t("whatsappItem4"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: WHATSAPP_GREEN }}
                      aria-hidden="true"
                    />
                    <span className="text-fru-dark/80">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-fru-dark/70 leading-relaxed">
                {t("whatsappPrivacy")}
              </p>
            </div>

            {/* Pointless on a phone — you cannot scan your own screen. Mobile
                visitors get the button instead. */}
            <div className="hidden sm:block flex-shrink-0 text-center">
              <div className="rounded-xl border border-fru-dark/10 bg-white p-3 shadow-sm">
                <Image
                  src="/images/whatsapp-channel-qr.png"
                  alt={t("whatsappQrAlt")}
                  width={720}
                  height={720}
                  className="w-36 h-36 md:w-40 md:h-40"
                />
              </div>
              <p className="mt-2 max-w-[10rem] text-xs text-fru-dark/60">
                {t("whatsappQrHint")}
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.social.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-heading font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {t("whatsappCta")}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={STORE_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-full font-heading font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            {t("facebook")}
          </a>

          <a
            href={STORE_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full font-heading font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            {t("instagram")}
          </a>
        </div>

        <ZigzagLine className="w-48 h-4 text-fru-purple/25 mx-auto mt-10" />
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.99 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
