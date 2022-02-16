export const getNumbers = async () => {
  return new Promise<{ data: number[] }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
        }),
      2000
    )
  );
};
