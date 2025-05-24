const Error = (error) => {
  return (
    <>
      <h2>The page you're looking for does not exist</h2>
      <p>{error?.data?.message}</p>
    </>
  );
}
export default Error