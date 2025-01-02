
# Scatch - Ecommerce Website

Scatch is a full-stack ecommerce website built with Node.js, Express, MongoDB, and EJS for the frontend. It allows users to browse and purchase products, and it includes an admin panel for managing products. It also supports user authentication and flash messages for status updates.


<p align="center"><img src="https://i.postimg.cc/nzg3gkL2/index-route.png" alt="project-image"></p>
## Features

- **Product Management**: Admins can create, view, and manage products with details like price, discount, and images.
- **User Authentication**: Secure login and session management.
- **Shopping Cart**: Users can add products to the cart and proceed to checkout.
- **Responsive Design**: The site is designed to work on both desktop and mobile devices.
- **Sorting and Filtering**: Users can sort products by popularity or newest and filter by availability and discount.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: EJS, Tailwind CSS
- **File Upload**: Multer
- **Session Management**: Express-Session, Cookie-Parser
- **Flash Messages**: Connect-Flash

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Suvanshhh/Scatch.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Scatch
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:

   ```bash
   EXPRESS_SESSION_SECRET=your_session_secret
   MONGODB_URI=mongodb://127.0.0.1:27017/scatch
   ```

5. Run the development server:

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000`.

## Project Screenshots


## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

