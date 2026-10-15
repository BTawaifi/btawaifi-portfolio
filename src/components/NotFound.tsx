import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import '../assets/css/about.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Boutros Tawaifi</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Boutros Tawaifi's portfolio homepage." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://btawaifi.github.io/404" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
      >
        <Container className="text-center">
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="display-1 fw-bold mb-4" style={{ color: '#007bff' }}>
              404
            </h1>
            <h2 className="h3 mb-4">Page Not Found</h2>
            <p className="lead mb-5">
              Oops! The page you're looking for doesn't exist. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="text-decoration-none">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="me-3"
                >
                  Go Home
                </Button>
              </Link>
            </motion.div>
            
            <div className="mt-4">
              <p className="text-muted">
                Or you can explore my{' '}
                <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
                  portfolio
                </Link>{' '}
                to see my work.
              </p>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
};

export default NotFound; 