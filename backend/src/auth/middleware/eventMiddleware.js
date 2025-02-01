// Middleware to validate event data
exports.validateEventData = (req, res, next) => {
          const { eventName, eventDescription, eventDate, eventTime } = req.body;
        
          if (!eventName || !eventDescription || !eventDate || !eventTime) {
            return res.status(400).json({ message: 'Please provide all required fields' });
          }
        
          next();
        };
        
        // Middleware for error handling
        exports.errorHandler = (err, req, res, next) => {
          console.error(err.stack);
          res.status(500).send('Something went wrong!');
        };
        