import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf, RussianRuble } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Широкий Ассортимент",
    Icon: ArrowDownToLine,
    desription:
      "От последних смартфонов до революционных гаджетов для умного дома – у нас есть все, что может пожелать ваше технологическое сердце.",
  },
  {
    name: "Гарантия качества",
    Icon: CheckCircle,
    desription:
      "Мы сотрудничаем только с проверенными производителями и гарантируем, что каждый продукт в нашем магазине – это апофеоз инноваций и надежности.",
  },
  {
    name: "Доступные цены",
    Icon: RussianRuble,
    desription:
      "Мы убеждены, что передовые технологии должны быть доступны каждому, поэтому мы предлагаем конкурентоспособные цены и регулярные акции.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl tracking-tighter font-bold text-gray-900 sm:text-6xl">
            Добро пожаловать в{" "}
            <span className=" text-red-600">Digital Dreamland</span> – Вашу
            вселенную цифровых мечтаний!
          </h1>
          <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
            Здесь, где каждый пиксель исчерпанно насыщен инновациями, мы
            открываем двери в мир, где технологии воплощают мечты в реальность.
            В Digital Dreamland, каждый гаджет рассказывает историю – историю о
            возможностях без границ, о вдохновении, которое приходит с новыми
            технологиями, и о чудесах цифрового мира.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Популярное
            </Link>
            <Button variant="ghost">Перейти &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className=" grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-red-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.desription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
