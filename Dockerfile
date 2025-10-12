# Stage 1: Build the Next.js application
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Install dependencies (only required for the build)
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Next.js application (Crucial for the Frame API endpoints)
RUN npm run build

# Stage 2: Run the application
FROM node:20-slim AS runner

# Set working directory
WORKDIR /app

# Next.js recommends copying only the necessary files for the runtime.
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Set the port Cloud Run expects
ENV PORT 8080 

# Define the production URL for your Frame metadata
# IMPORTANT: This will be overwritten by a variable during deployment (Step 3).
ENV NEXT_PUBLIC_URL=http://localhost:3000

# Next.js production start script
CMD ["npm", "start"]
