import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const mailTo = "javechiu@gmail.com";
  function sendEmail() {
    location.href = "mailto:" + mailTo + "?subject=" + subject + "&body=" + body;
  }

  const { t } = useTranslation();
  return (
    <div className="font-poppins text-gray-600">
      {/* <div className="hidden sm:flex flex-col text-gray p-10 h-screen">
        <div className=" font-semibold md:text-[72px] text-[48px]">
          <h1>{t("app.contact")}</h1>
        </div>
        <div className="px-20 pb-13 pt-20 mb-10">
          <form action="#" method="get">
            <div>
              <label className="w-full">{t("contact.subject")}</label>
              <br />
              <input
                className="p-2 w-full rounded-md shadow-sm border border-gray-300"
                id="body"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </div>
            <div>
              <label className="w-full">{t("contact.message")}</label>
              <br />
              <textarea
                rows={5}
                className="p-2 w-full rounded-md shadow-sm border border-gray-300 resize-none "
                id="message"
                value={body}
                onChange={(event) => {
                  setBody(event.target.value);
                }}
              />
            </div>
            <div>
              <span className="flex py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-submit w-fit mt-10">
                <input type="submit" value={t("contact.send")} onClick={sendEmail} />
              </span>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div> */}
      <div className="flex flex-col text-gray p-10 h-screen">
        <div className="flex flex-col font-semibold py-14 sm:pb-20 items-start justify-center">
          <span className=" md:text-[56px] text-[36px] text-grey-500">
            {t("contact.description")}
          </span>
        </div>
        <div className="py-13 pt-15">
          <form action="#" method="get">
            <div>
              <label className="w-full">{t("contact.subject")}</label>
              <br />
              <input
                className="p-2 w-full rounded-md shadow-sm border border-gray-300"
                id="body"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </div>
            <div>
              <label className="w-full">{t("contact.message")}</label>
              <br />
              <textarea
                rows={5}
                className="p-2 w-full rounded-md shadow-sm border border-gray-300 resize-none "
                id="message"
                value={body}
                onChange={(event) => {
                  setBody(event.target.value);
                }}
              />
            </div>
            <div>
              <span className="flex py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-submit w-fit mt-3">
                <input type="submit" value={t("contact.send")} onClick={sendEmail} />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
