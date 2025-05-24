const Error = (error) => {
  return (
    <>
      <h1>The page your looking for does not exist</h1>
      <p>{error?.data?.message}</p>
    </>
  );
}
export default Error