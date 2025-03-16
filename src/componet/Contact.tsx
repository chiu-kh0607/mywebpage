import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const mailTo = "javechiu@gmail.com";
  function sendEmail() {
    location.href = "mailto:" + mailTo + "?subject=" + { subject } + "&body=" + { body };
  }
  useEffect(() => {
    console.log("mailto:" + mailTo + "?subject=" + { subject } + "&body=" + { body });
  });

  const { t } = useTranslation();
  return (
    <div className="font-poppins text-gray-600">
      <div className="hidden sm:flex flex-col text-gray p-10 h-screen">
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
          {/* <form className=" p-10 ">
            <div className=" px-10 py-3 pt-5">
              <label className="w-full">Email</label>
              <br />
              <input
                className="p-2 w-full rounded-md shadow-sm border border-gray-300"
                id="email"
                type="text"
              />
            </div>
            <div className=" px-10 py-3">
              <label className="w-full">Subject</label>
              <br />
              <input
                className="p-2 w-full rounded-md shadow-sm border border-gray-300"
                id="body"
                type="text"
              />
            </div>
            <div className=" px-10 py-3">
              <label className="w-full">Message</label>
              <br />
              <textarea
                rows={5}
                className="p-2 w-full rounded-md shadow-sm border border-gray-300 resize-none "
                id="message"
              />
            </div>
            <div className="px-10 pt-5">
              <span className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-submit">
                <input type="submit" value="Send message" />
              </span>
            </div>
          </form> */}
        </div>
      </div>
      <div className="flex sm:hidden flex-col text-gray p-10 h-screen">
        <div className=" font-semibold md:text-[72px] text-[48px]">
          <h1>{t("app.contact")}</h1>
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
                  console.log("mailto:" + mailTo + "?subject=" + { subject } + "&body=" + { body });
                }}
              />
            </div>
            <div>
              <span className="flex py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-submit w-fit mt-3">
                <input type="submit" value={t("contact.send")} onClick={sendEmail} />
              </span>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
