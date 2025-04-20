import styles from './Alert.module.css';

const Alert = ({ title, message, isVisible, onClose }) => {
     
    if(!isVisible) return null;


    return (
        <div className={styles.alertOverlay}>
            <div className={styles.alertBox}>
                <h2 className={styles.alertTitle}>{title}</h2>
                <p className={styles.alertMessage}>{message}</p>
                <button className={styles.alertButton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Alert;