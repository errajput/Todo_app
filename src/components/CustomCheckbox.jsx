const CustomCheckbox = ({ onChange, checked }) => {
  return (
    <label className="relative cursor-pointer">
      <input type="checkbox" onChange={onChange} checked={checked} />
    </label>
  );
};
export default CustomCheckbox;
