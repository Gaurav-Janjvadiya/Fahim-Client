import PropTypes from 'prop-types';

function Button(props) {
  const { type = 'button', children, style, onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ textShadow: '2px 2px 5px gray' }}
      className={`px-5 py-3 font-bold rounded-full hover:bg-[#7FFF00] active:bg-[#37ff14de] bg-[#39FF14] text-[#E8F5E9] transition-all duration-200 ease-in-out ${style}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
