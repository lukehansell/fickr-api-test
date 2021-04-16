export const SearchForm = ({ onSubmit = () => {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search..." name="tags" />
      <input type="submit" value="Search" />
    </form>
  );
};
