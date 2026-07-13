# SortFare

A full-stack application built with Next.js, Express, and MongoDB.

## Overview

SortFare is a flight comparison app where users search, compare, and rank flights across airlines by price, duration, and stops. There is no booking flow — users are redirected to the airline's own site to purchase.

## Tech Stack

- **Frontend:** Next.js
- **Backend:** Express
- **Database:** MongoDB

## Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (local or Atlas)

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/SAIEED12/SortFare.git
cd SortFare

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
# MongoDB
MONGODB_URI=

# Next.js
NEXT_PUBLIC_API_URL=

# Express
PORT=3001
```

### Development

```bash
# Start the development servers
npm run dev
```

## Project Structure

```
├── client/          # Next.js frontend
├── server/          # Express backend
└── ...
```

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start development servers |

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
