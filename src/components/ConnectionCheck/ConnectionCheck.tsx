import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

const ConnectionCheck = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [show, setShow] = useState(false);


  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
      setShow(true);
    };

    window.addEventListener('online', handleStatusChange);

    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  return (
    <ToastContainer style={{ marginTop: "3rem" }} containerPosition="fixed" className="p-3" position="top-end">
      {show && (
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{ borderRadius: "1rem", width: "14rem" }}>
          <Toast.Header style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}>
            <img
              src="./tmdb.jpg"
              className="rounded me-2"
              alt=""
              style={{ height: "1.5rem" }}
            />
            <strong className="me-auto">TMDB</strong>
            <small>Adesso</small>
          </Toast.Header>
          <Toast.Body style={{ borderRadius: "1rem", fontWeight: "bold", color: !isOnline ? 'red' : 'green' }}> {!isOnline ? "Sei Offline!" : "Sei Online!"} </Toast.Body>
        </Toast>
      )}
    </ToastContainer>
  );
}

export default ConnectionCheck;
