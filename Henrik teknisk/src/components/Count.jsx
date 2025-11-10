function Count({ count, setCount }) {
  return (
    <>
      <div>
        <p>Your count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default Count