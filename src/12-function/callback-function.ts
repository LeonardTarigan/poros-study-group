const formattedGreeting = (
  name: string,
  formatFn: (name: string) => string
) => {
  console.log(`Hello ${formatFn(name)}`);
};

const formatName = (name: string) => name.toUpperCase();

formattedGreeting("Hadi", formatName);
