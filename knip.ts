const compiler = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;

export default {
  entry: ['src/main.ts', 'vite.config.ts'],
  project: '**/*.{ts,vue}',
  compilers: {
    vue: (text: string) => {
      const scripts = [];
      let match;
      while ((match = compiler.exec(text))) scripts.push(match[1]);
      return scripts.join(';');
    },
  },
};
