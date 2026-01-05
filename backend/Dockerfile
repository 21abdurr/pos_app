FROM node:22

# Set working directory
WORKDIR /app

# Copy dependencies first (layering)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 3000

# Run app
