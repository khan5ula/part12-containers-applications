FROM oven/bun:latest

WORKDIR /usr/src/app

COPY . .

RUN bun install

CMD bun run dev