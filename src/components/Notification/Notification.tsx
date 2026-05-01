import css from './Notification.module.css';

type NotificationProps = {
    message: string;
};
const Notification = ({ message }: NotificationProps) => {
    return (
        <div className={css.notification}>
            <p>{message}</p>
        </div>
    )
}
export default Notification