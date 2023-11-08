export const Debug = ({ state }) => {
  const { value, context } = state;

  return (
    <div className="mt-10 text-center text-red-500 font-bold flex flex-col">
      debug
      <span>state: {value}</span>
      <span>context: {JSON.stringify(context)}</span>
    </div>
  );
};
