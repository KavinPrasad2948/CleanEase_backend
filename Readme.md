# Cleaning Service App

Welcome to the Cleaning Service App! This application allows users to book cleaning services and make payments online.

## Features

- **User Authentication**: Users can register, login, and reset their passwords if forgotten.
- **User Profiles**: Users can view and update their profiles, including name, address, and phone number.
- **Booking Management**: Users can create, update, and delete their bookings. Each booking includes details such as service type, date, and notes.
- **Payment Integration**: Integration with Stripe for handling payment transactions securely.

## Prerequisites

Before running the application, make sure you have the following installed:

1. Node.js
2. MongoDB
3. Stripe account (for payment integration)

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
4. Start the server using npm start.
5. Access the API endpoints using cleanease-backend.onrender.com.

## API Endpoints
### Authentication

  -  POST /api/auth/register: Register a new user.
  -  POST /api/auth/login: Login with existing credentials.
  -  POST /api/auth/forgotpassword: Send reset password token to user's email.
  -  POST /api/auth/reset/
    : Reset user's password using the provided token.

### User Profile

  -  GET /api/profile: Get current user's profile.
  -  PUT /api/profile: Update user's profile.

### Bookings

  -  GET /api/bookings: Get all bookings for the current user.
  -  POST /api/bookings: Create a new booking.
  -  PUT /api/bookings/
    : Update a booking.
  -  DELETE /api/bookings/
    : Delete a booking.

### Payment

   - POST /api/payment/create-payment-intent: Create a payment intent for booking.
   - POST /api/payment/payment-success: Record successful payment.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues if you encounter any problems.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/KavinPrasad2948/CleanEase_backend.git) file for details.   