import { getContactInfo } from "../../services/contacts";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title:
      "Политика конфиденциальности - Юридическая фирма «Бурков, Радев, Дюльгерска»“",
    description:
      "Узнайте больше о нашей политике конфиденциальности и о том, как мы обрабатываем ваши персональные данные.",
  };
}

export default async function PrivacyPolicy() {
  const contactInfo = await getContactInfo();

  return (
    <div className="container mx-auto p-6 max-w-5xl bg-white py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">
        Политика конфиденциальности
      </h1>
      <p className="mb-4 text-gray-700">
        В настоящей Политике конфиденциальности описывается, как «Юридическая
        фирма «Бурков, Радев, Дюльгерская»» («Мы», «Наша юридическая фирма»)
        собирает, использует и защищает персональные данные пользователей нашего
        веб-сайта. Бурков, Радев, Дылгерская» («Мы», «Наш офис») собирает,
        использует и защищает персональные данные пользователей нашего сайта.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        1. Сбор персональных данных
      </h2>
      <p className="text-gray-700">
        Мы собираем следующие категории персональных данных, предоставленных
        добровольно от вас:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Имя и фамилия</li>
        <li>Имейл адрес (при абонамент за бюлетин)</li>
        <li>Телефонный номер (при заполнении контактной формы)</li>
        <li>Сообщения и запросы, отправленные через форму контакта</li>
        <li>IP адрес и данные об использовании сайта (через файлы cookie)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        2. Цели обработки
      </h2>
      <p className="text-gray-700">
        Мы обрабатываем ваши персональные данные для следующих целей:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Ответ на запросы и предоставление юридических услуг</li>
        <li>Отправка бюлетеней и юридической информации</li>
        <li>Анализ и улучшение пользовательского опыта</li>
        <li>Соответствие законодательным требованиям</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        3. Хранение и защита персональных данных
      </h2>
      <p className="text-gray-700">
        Персональные данные хранятся на защищенных серверах и доступ к ним
        ограничен. только для уполномоченных лиц. Мы не предоставляем ваши
        данные третьим лицам без вашего прямого согласия, если это не требуется
        по закону.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        4. Бисквитки
      </h2>
      <p className="text-gray-700">
        Наш сайт использует файлы cookie для улучшения взаимодействия с
        пользователем. опыт. Вы можете отказаться от использования файлов cookie
        или управлять ими через настройки вашего браузера.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        5. Ваши права
      </h2>
      <p className="text-gray-700">
        Согласно Общему регламенту о защите данных (GDPR) у вас есть следующие
        права:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Право на доступ к вашим персональным данным</li>
        <li>Право на корректировку неточных данных</li>
        <li>Право на удаление ("право быть забытым")</li>
        <li>Право на возражение против обработки</li>
        <li>Право на переносимость данных</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">6. Контакт</h2>
      <p className="text-gray-700">
        Если у вас есть вопросы по настоящей политике конфиденциальности или вы
        хотите использовать свои права, пожалуйста, свяжитесь с нами на:
      </p>
      {contactInfo && (
        <p className="text-gray-700 mt-2">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="hover:text-gray-900"
          >
            <strong>Email:</strong> {contactInfo.email} <br />
          </Link>
          <Link
            href={`tel:${contactInfo.phone_number}`}
            className="hover:text-gray-900"
          >
            <strong>Телефон:</strong> {contactInfo.phone_number} <br />
          </Link>
          <strong>Адрес:</strong> {contactInfo.address}
        </p>
      )}
    </div>
  );
}
