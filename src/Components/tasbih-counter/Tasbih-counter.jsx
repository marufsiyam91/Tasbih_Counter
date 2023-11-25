import React, { useState } from "react";
import "./Tasbih-counter.css";

const Tasbih = () => {
  const [totalCounter, setTotalCounter] = useState(0);
  const [subhanAllahCounter, setSubhanAllahCounter] = useState(0);
  const [alhamdulillahCounter, setAlhamdulillahCounter] = useState(0);
  const [allahuAkbarCounter, setAllahuAkbarCounter] = useState(0);

  const totalTasbihCount = () => {
    totalCounter < 100 && setTotalCounter(() => totalCounter + 1);
    totalCounter < 33 && setSubhanAllahCounter(subhanAllahCounter + 1);
    totalCounter > 32 &&
      totalCounter < 66 &&
      setAlhamdulillahCounter(alhamdulillahCounter + 1);
    totalCounter > 65 &&
      totalCounter < 100 &&
      setAllahuAkbarCounter(allahuAkbarCounter + 1);
  };

  const resetTotalTasbihCount = () => {
    setTotalCounter(0);
    setSubhanAllahCounter(0);
    setAlhamdulillahCounter(0);
    setAllahuAkbarCounter(0);
  };

  return (
    <div>
      <div className="Tasbih_counter_wrapper">
        <div className="tasbih_counter_container">
          <div className="tasbih_wrapper_container">
            <div className="Tasbih-main-content">
              <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
              <h1 style={{ marginTop: "20px" }}>{totalCounter}</h1>

              <div className="tasbih_container">
                <div className="tasbih_wrapper">
                  <div className="allahuAkbar_wrapper">
                    <h3>{allahuAkbarCounter}</h3>
                    <h1>الله أكبر</h1>
                  </div>

                  <div className="alhamdulillah_wrapper">
                    <h3>{alhamdulillahCounter}</h3>
                    <h1>الحمدلله</h1>
                  </div>

                  <div className="subhanAllah_wrapper">
                    <h3>{subhanAllahCounter}</h3>
                    <h1>سبحان الله</h1>
                  </div>
                </div>

                <div className="tasbih_count_btn_container">
                  <button onClick={totalTasbihCount}>Count</button>
                  <button onClick={resetTotalTasbihCount}>Reset</button>
                </div>
              </div>
            </div>

            <div className="back-particle"></div>
            <div className="back-particle-two"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasbih;
