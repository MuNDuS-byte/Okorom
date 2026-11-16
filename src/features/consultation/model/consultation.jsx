import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

const ConsultationContext = createContext(null);

export const ConsultationProvider = ({ children }) => {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const notifySubmitted = useCallback(() => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  }, []);

  const scrollToConsultation = useCallback(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const value = useMemo(
    () => ({ ref, scrollToConsultation, submitted, notifySubmitted }),
    [scrollToConsultation, submitted, notifySubmitted]
  );

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within ConsultationProvider');
  }
  return context;
};
