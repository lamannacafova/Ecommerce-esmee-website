import React from "react";
import { useTranslation } from "react-i18next";

const Spring = () => {
  const {t}=useTranslation()
  return (
    <section className="spring">
      <div className="spring-image">
        <h6>{t("spring.0")}</h6>
        <h2>{t("spring.1")}</h2>
      </div>
    </section>
  );
};

export default Spring;
