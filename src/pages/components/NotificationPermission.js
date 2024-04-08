import { useEffect } from 'react';
import firebase from '../../firebaseConfig';

const NotificationPermission = () => {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      const messaging = firebase.messaging();
      try {
        await Notification.requestPermission();
        const token = await messaging.getToken();
        console.log('Notification permission granted.');
        console.log('Token:', token);
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    };

    if ('Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window) {
      requestNotificationPermission();
    } else {
      console.log('Push messaging is not supported');
    }
  }, []);

  return null;
};

export default NotificationPermission;
