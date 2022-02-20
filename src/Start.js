import { motion } from "framer-motion";
import { useState } from "react";
import { Alert } from "@mui/material";
import {
  ArrowForwardIos,
  ArrowBackIos,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";

export default function Start(props) {
  const [img, setImg] = useState(0);
  const imgs = [
    <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1176x10000:format=jpg/path/s5716ff8e3a6d452a/image/ib3f9157780e2cc0a/version/1593627737/image.jpg" />,
    <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=700x1024:format=jpg/path/s5716ff8e3a6d452a/image/ia2a80a50758a8e2f/version/1487693330/image.jpg" />,
    <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/i645ce8f22498e443/version/1593630717/image.jpg" />,
  ];
  const changeImg = (action) => {
    if (action.toLowerCase() === "next") {
      if (img > 1) {
        setImg(0);
      } else {
        setImg(img + 1);
      }
      return;
    }
    if (action.toLowerCase() === "last") {
      if (img < 1) {
        setImg(2);
      } else {
        setImg(img - 1);
      }
      return;
    }
  };

  //JSX CONTENT STARTS HERE
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
        <div className="imgslider">
          <motion.div
            className="nextimg"
            whileHover={{
              scale: 1.035,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => changeImg("last")}
          >
            <ArrowBackIos />
          </motion.div>
          {imgs[img]}
          <motion.div
            className="nextimg"
            whileHover={{
              scale: 1.035,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => changeImg("next")}
          >
            <ArrowForwardIos />
          </motion.div>
        </div>
        <div className="divider"></div>
        <div className="shop-new">
          <fieldset>
            <legend>
              <ShoppingBag />
              Neu im Shop
            </legend>
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=676x10000:format=jpg/path/s5716ff8e3a6d452a/image/ibd1f79bf55a1f30a/version/1593630688/image.jpg"
              onClick={() => props.setSite(1)}
            />
          </fieldset>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}
