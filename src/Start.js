import { motion } from "framer-motion";
import { useState } from "react";
import { Alert } from "@mui/material";

export default function Start(props) {
  return (
    <div className="start-wrapper">
      <div className="front-wrapper">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=380x10000:format=png/path/s5716ff8e3a6d452a/image/i047f7ead75260886/version/1455016429/image.png"
          className="front-logo"
        />
        <div className="front-header-wrapper">
          <p>Schülergenossen Selm</p>
        </div>
        <div className="front-text">
          <p>
            Herzlich Willkommen auf der Website der Schülergenossen Selm eSG!
            Klicke auf eins der Logos um mehr über unsere beiden
            Geschäftsbereiche herauszufinden!
          </p>
        </div>
        <div className="businesses">
          <motion.div
            whileHover={{
              scale: 1.035,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=380x10000:format=png/path/s5716ff8e3a6d452a/image/i047f7ead75260886/version/1455016429/image.png"
              className="front-logo"
              onClick={() => props.setSite(2)}
            />
            <p>SGS Merchandise</p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.035,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/ia2fe91a2e78d9c8c/version/1455131170/image.png"
              className="front-logo"
              onClick={() => props.setSite(3)}
            />
            <p>Potato Company</p>
          </motion.div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}
