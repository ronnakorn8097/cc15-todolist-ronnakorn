import styles from "./Button.module.scss";

// Button (obj)
// Button ({text,active,type,onClick}) // ลำดับการส่ง ไม่มีผลใน array destructor แค่ชื่อ เหมือนกันก็พอ
export function Button({type, onClick, text, active = true }) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return (
    <button
      className={`${styles.btn} 
  ${btnStyles}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
