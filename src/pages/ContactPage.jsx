
import React from 'react';
import { motion } from 'framer-motion';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

const ContactPage = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactPage;
