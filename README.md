
Demo Link-https://drive.google.com/file/d/1yba4TFw_JUGCs5QDRQkr0Nij_7nQsAIJ/view?usp=sharing
# Personal Finance Assistant

A full-stack web application designed to help users track, manage, and understand their financial activities. Users can log income and expenses, categorize transactions, view summaries of their spending habits, and extract expense data from uploaded receipts.

## Features

### Core Functionality
- **Income & Expense Tracking**: Create and manage financial transactions through an intuitive web interface
- **Transaction Listing**: View all income and expenses within specific time ranges with pagination support
- **Visual Analytics**: 
  - Expenses by category (pie charts, bar graphs)
  - Expenses by date (line charts, trend analysis)
- **Receipt Processing**: Extract expense data from uploaded receipts (images and PDFs) using OCR technology

### Additional Features  
- **Multi-user Support**: Multiple users can use the web app with separate accounts
- **Data Persistence**: All financial data is stored securely in a database
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

### Frontend
- **React.js** with Vite for fast development
- **Tailwind CSS** for responsive styling  
- **Chart.js** for data visualizations
- **React Router** for navigation
- **Axios** for API communications

### Backend
- **Node.js** with Express.js framework
- **MongoDB** for data persistence
- **JWT Authentication** for secure user sessions
- **Multer** for file upload handling
- **OCR Integration** for receipt text extraction

## Project Structure

```
typeface-finance-app/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Main application pages
│   │   ├── services/       # API service functions
│   │   └── utils/          # Utility functions
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Express.js backend API
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or cloud instance)
- npm or yarn package manager

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd typeface-finance-app/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/finance-app
   JWT_SECRET=your-jwt-secret-key
   CORS_ORIGIN=http://localhost:5173
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```
   
   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd typeface-finance-app/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The frontend application will run on `http://localhost:5173`

### Access the Application

1. Open your browser and navigate to `http://localhost:5173`
2. Create a new account or sign in with existing credentials
3. Start tracking your financial transactions!

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Transactions
- `GET /api/transactions` - Get all transactions (with pagination and filtering)
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update existing transaction
- `DELETE /api/transactions/:id` - Delete transaction
- `GET /api/transactions/summary` - Get financial summary
- `GET /api/transactions/analytics` - Get analytics data

### Receipts
- `POST /api/receipts/upload` - Upload and process receipt
- `GET /api/receipts` - Get all uploaded receipts
- `DELETE /api/receipts/:id` - Delete receipt

## Database Schema

### User Model
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Transaction Model
```javascript
{
  userId: ObjectId,
  type: String, // 'income' or 'expense'
  amount: Number,
  description: String,
  category: String,
  date: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Receipt Model
```javascript
{
  userId: ObjectId,
  filename: String,
  filePath: String,
  extractedData: Object,
  status: String, // 'processing', 'completed', 'failed'
  createdAt: Date,
  updatedAt: Date
}
```

## Development

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests

### Code Quality Guidelines

- **Clean Code**: Clear and concise code with meaningful variable/function names
- **Modularity**: Logical separation of concerns and reusable components
- **Error Handling**: Comprehensive error handling and validation
- **Documentation**: Clear README with setup instructions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Deployment

### Production Build

1. **Build the frontend:**
   ```bash
   cd frontend && npm run build
   ```

2. **Start the backend in production mode:**
   ```bash
   cd backend && NODE_ENV=production npm start
   ```

3. **Serve the built frontend** using a web server like Nginx or serve it from the Express backend

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**: Ensure MongoDB is running and the connection string is correct
2. **CORS Issues**: Verify `CORS_ORIGIN` in backend `.env` matches frontend URL
3. **File Upload Issues**: Check file size limits and supported formats
4. **Build Errors**: Clear `node_modules` and reinstall dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Made with ❤️ by Rahul Kumar**
